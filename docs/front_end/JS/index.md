# JS备忘录

- 学习自[山月哥的手写题](https://q.shanyue.tech/fe/js/457.html)  => [链接](https://xrwb4cgseo.feishu.cn/docx/doxcnzZSzwi9nMTkJXHUacLjyAb?from=from_copylink)

## V8如何执行JS代码![V8执行过程](https://cdn.staticaly.com/gh/glows777/image-hosting@main/js笔记/V8执行过程.3pmvaiexkvq0.webp)

- 其中，解释器有两个步骤
  - 第一步是词法分析（分词），将一行行的源码拆解成一个个 token。所谓 token，指的是语法上不可能再分的、最小的单个字符或字符串
  - 第二部是词法分析（解析），将上一步生成的 token 数据，根据语法规则转为 AST。如果源码符合语法规则，这一步就会顺利完成。但如果源码存在语法错误，这一步就会终止，并抛出一个“语法错误”
  - 随后，V8会生成这段代码的上下文

## 异步加载 JS 脚本时，各种类型的加载有何区别

- 来自[whatwg](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)的规范![image](https://cdn.staticaly.com/gh/glows777/image-hosting@main/BlogImage/image.708uxk66gyw0.webp)

- JS脚本分为加载，解析，执行三个阶段，也就是fetch，execution（解析并执行）
- JS 的脚本加载(fetch)且执行(execution)会阻塞 DOM 的渲染，因此 JS 一般放到最后头
- defer和async的最大区别：
  - defer加载后，不会马上执行，而是等到DOM解析后，事件 `DomContentLoaded` 之前
  - async则会在加载后立刻执行，会阻塞DOM解析
  - 相同点是都是异步加载

## 什么是AMD，UND，CJS，ESM

- `AMD` 是一种浏览器中的模块格式，关键词是`define`
- `CJS`是Node的一种格式,全称`CommonJS`，关键字是`export/require`
- `UMD` 是 `AMD` 与 `CJS` 两种格式的兼容。既可以跑在浏览器，又可以跑在 Node
- `ESM`是浏览器原生支持的模块，默认是严格模式，关键字是`import/export`

## Map和WeakMap的区别

- Map可使用任何数据类型作为key，但因其在内部实现原理中需要维护两个数组，存储 key/value，因此垃圾回收机制无法回收
- WeakMap只能使用引用数据类型作为 key。弱引用，不在内部维护两个数组，可被垃圾回收，但因此无法被遍历！即没有与枚举相关的 API，如 `keys`、`values`、`entries` 、`size`等，键名无法被预知，因为随时可能回被垃圾机制回收

## JS中的安全整数

- 范围是 `-(2 ** 53 - 1)`- `2 ** 53 - 1`

- `Number.MAX_SAFE_INTEGER` 是最大安全整数

- `Number.isSafeInteger()` 用来判断一个数值是否为安全整数

- 安全整数之外，加减计算则会发生精度问题

  - ```javascript
    Number.MAX_SAFE_INTEGER;
    //=> 9007199254740991
    
    Number.MAX_SAFE_INTEGER + 1;
    //=> 9007199254740992
    
    // 计算错误，结果应该是 9007199254740993
    Number.MAX_SAFE_INTEGER + 2;
    //=> 9007199254740992
    ```

- 最大数是 `Number.MAX_VALUE`，约为 1.79E+308
- `EPSILON` 是一个小常量，约为 2.22E-16，它可以用来表示浮点数之间的最小精度。它的原理是，如果两个数之差的绝对值小于 `EPSILON`，那么它们可以被认为是相等的
  
  - 可以用它来检验精度

## 关于Cookie

- 当cookie 没有设置 maxage 时，此 cookie 就是会话级别的，浏览器关闭就没了

## prefetch 与 preload 的区别

- prefetch 是在浏览器**空闲**时使用预测机制预先加载某些内容，以便在用户访问时能够更快地呈现给用户

- preload 则是在当前页面的 HTML 中明确声明，告诉浏览器**立即加载**某些资源，以便在页面渲染过程中能够快速访问

- 例子：

  ```html
  <link rel="prefetch" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />
  ```

## DOM一些api

### window.requestIdCallback

- `requestIdleCallback()`是一个浏览器 API，可以在浏览器空闲时执行一段回调函数。使用这个方法能让你的脚本在页面渲染的同时执行，从而不会阻塞页面的交互

- 这个方法的使用场景包括在浏览器空闲时执行一些计算量较大的任务，比如延迟加载图片，或者在页面渲染完成后执行一些高优先级的任务
- 注意在这回调函数中，不要去操作DOM，因为它本来就是利用的重排重绘后的间隙空闲时间，重新操作 DOM 又会造成重排重绘
- 例子： `var handle = window.requestIdleCallback(callback, { options })`

## 在路由中，Hash和History模式的区别

- hash 只能改变#后的值，而 history 模式可以随意设置同源 url
- hash 只能添加字符串类的数据，而 history 可以通过 API 添加多种类型的数据
- hash无需后端配合且兼容性好，而而 history 需要配置`index.html`用于匹配不到资源的情况

- hash通过`location.hash`跳转路由，`hashchange event` 监听路由变化
- history通过`history.pushState()`跳转路由,通过`popstate event` 监听路由变化，但无法监听到 `history.pushState()` 时的路由变化

