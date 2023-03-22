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
              (+index > 0) ? index : String(target.length + +index),
              receiver
          )
  })
  ```

### 隐藏属性

### 缓存

### 运算符重载

### Vue3的响应式实现

## 其他

- 与大多数全局对象不同 `Reflect` 并非一个构造函数，所以不能通过 [new 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)对其进行调用，或者将 `Reflect` 对象作为一个函数来调用。`Reflect` 的所有属性和方法都是静态的（就像 [`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象）
- Reflect对象提供了和proxy的handler相同的静态方法































