# Proxy的应用

## proxy的概念

- 在MDN中写道： *Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）*
- 讲人话就是Proxy是一个对象的原生方法（如： get访问对象的属性，set设置对象的属性，has拦截in操作符判断属性或方法是否存在Object或其原型链上等）上的一层捕捉器，可以实现拦截，修改等操作
- 常见的使用场景有运算符重载，对象模拟，创建简洁的API，对象更改事件等
- 还有比较有名的就是Vue3通过Proxy来实现响应式的，Vue2则是通过Object.defineProperty()来实现的

### 术语

- handler -> 处理器对象

- traps -> 提供属性的访问方法

- target -> 被Proxy代理的虚拟化对象

- ```javascript
  let proxy = new Proxy(target, handler)
  ```

- **target必须是个对象**

### 捕捉器（handler）的方法

- `getPrototypeOf()` ：[Object.getPrototypeOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf) 方法的捕捉器
- `setPrototypeOf()` ：[Object.setPrototypeOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 方法的捕捉器
- `isExtensible()` ：[Object.isExtensible](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) 方法的捕捉器
- `preventExtensions()` ：[Object.preventExtensions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) 方法的捕捉器
- `getOwnPropertyDescriptor()` ：[Object.getOwnPropertyDescriptor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 方法的捕捉器
- `defineProperty()`： [Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 方法的捕捉器
- `has()` ：[in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 操作符的捕捉器
- `get()` ：属性读取操作的捕捉器
- `set()` ：属性设置操作的捕捉器
- `deleteProperty()` ：[delete](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 操作符的捕捉器
- `ownKeys()` ：[Object.getOwnPropertyNames](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) 方法和 [Object.getOwnPropertySymbols](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) 方法的捕捉器
- `apply()` ：函数调用操作的捕捉器
- `construct()` ：[new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符的捕捉器

## 使用场景

### 设置默认值

- 可以给一些本来不存在的值设置初始值

- ```javascript
  const withZeroValue = (target, zeroValue) => 
  	new Proxy(target, {
      	get: (target, key) => (key in obj) ? target[key] : zeroValue  
  	})
  const obj = {
      a: 1,
      b: 'b'
  }
  console.log(obj.a, obj.b, obj.c) // a 'b' undefined
  
  const withDefaultValueObj = withZeroValue(obj, 0)
  console.log(obj.a, obj.b, obj.c) // a 'b' 0
  // 如上所示，c的默认值是0，而不再是undefined
  ```

### 负索引数组

- 通过负数来访问数组的倒数第几个元素

- ```javascript
  const negativeArray = (arr) => new Proxy(arr, {
      get: (target, index, receiver) => 
      	Reflect.get(
              target, 
              // 这里要用+index，是因为这里会自动把传入的值字符串化，所以我们要手动转一下
              (+index >= 0) ? index : String(target.length + +index),
              receiver
          )
  })
  
  const arr = negativeArray([1, 2, 3, 4, 5])
  console.log(arr[-1]) // 5
  console.log(arr[0]) // 1
  console.log(arr[-2]) // 4
  ```

### 隐藏属性

- 在JS中，没有私有属性，我们可以通过闭包等方式来实现，这里分享一个通过proxy来实现的例子

- 默认变量以`_`开头为私有变量，这是一种约定，我们下面通过proxy来让他强制私有

- ```javascript
  const privatePropObj = (target, prefix = '_') => new Proxy(target, {
      has: (target, key) => (!key.startsWith(prefix) && key in target),
      
      ownKeys: (target) => Reflect.ownKeys(target)
      	.filter(key => !key.startsWith(prefix)),
      
      // 这里是key in recevier很关 不是key in target,因为”重写“了捕捉器的has方法
  	get: (target, key, recevier) => (key in recevier) 
          ? target[key] 
      	: undefined
  })
  
  const obj = privatePropObj({
      name: 'glows777',
      _age: 18,
      hobby: 'running'
  })
  console.log(obj.name, obj._age, obj.hobby) // 'glows777' undefined 'running' 
  ```

- 上面的实现方式，还缺少deleteProperty，definePropertty的捕捉器

### 缓存

- 通过proxy拦截对象的get方法，从而实现缓存，以及缓存有效时间的效果

- 思路： 根据需要将对象包装为无效（和重新同步）属性。 所有访问属性的尝试都首先检查缓存策略，该策略决定返回当前在内存中的内容还是采取其他一些操作

- ```javascript
  // 默认单位为秒,默认过期时间为10s
  const createCachedObj = (target, expeiredTimes) => {
      const createdAt = Date.now();
      const isExperied = (time = 10) => Date.now() - createdAt > time * 1000
      return new Proxy(target, {
      	get: (target, key) => isExperied(expeiredTimes[key]) ? undefined : Reflect.get(target, key)
  	})
  }
  let bankAccount = createCachedObj({
    balance: 14.93,
    b: 'b',
    a: 11
  }, {
      a: 15,
      balance: 10
  })
  
  console.log(bankAccount.balance)    // 14.93
  
  setTimeout(() => {
    console.log(bankAccount.balance)  // undefined
    console.log(bankAccount.a) // 11
    console.log(bankAccount.b) // 'undefined'
  }, 10 * 1000)
  ```

### Vue3的响应式实现

- Vue2是遍历data属性，而后通过`Object.defineProperty`来将他们转化为`getter/setter`，并在内部追踪依赖，在属性被访问或修改时通知变化，每个组件实例都有相应的 `watcher` 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 `setter` 被调用时，会通知 `watcher` 重新计算，从而致使它关联的组件得以更新
- 遍历属性对data进行修改很显然效率不高，所以Vue3采用了Proxy来实现响应式
- `Proxy` 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括**新增属性和删除属性**，同时还可以监听**数组的变化**，而Vue2是通过重写数组的方法来实现响应式的，并且也不能监听新增和删除属性，这个需要通过`$set,$delete`的api来额外实现

## 其他

- 与大多数全局对象不同 `Reflect` 并非一个构造函数，所以不能通过 [new 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)对其进行调用，或者将 `Reflect` 对象作为一个函数来调用。`Reflect` 的所有属性和方法都是静态的（就像 [`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象）
- Reflect对象提供了和proxy的handler相同的静态方法

---

## 参考文章

- [浅谈 ES6 中的 Proxy 用法](https://toflying.com/2022/07/08/6-talk-about-es6-proxy/#handler-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95)
- [[译]实例解析 ES6 Proxy 使用场景](https://segmentfault.com/a/1190000006035363)

---







































