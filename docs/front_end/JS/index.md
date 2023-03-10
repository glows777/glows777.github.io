# JS备忘录

- 学习自[山月哥的手写题](https://q.shanyue.tech/fe/js/457.html)  => [链接](https://xrwb4cgseo.feishu.cn/docx/doxcnzZSzwi9nMTkJXHUacLjyAb?from=from_copylink)

## V8如何执行JS代码![V8执行过程](https://cdn.staticaly.com/gh/glows777/image-hosting@main/js笔记/V8执行过程.3pmvaiexkvq0.webp)

- 其中，解释器有两个步骤
  - 第一步是词法分析（分词），将一行行的源码拆解成一个个 token。所谓 token，指的是语法上不可能再分的、最小的单个字符或字符串
  - 第二部是词法分析（解析），将上一步生成的 token 数据，根据语法规则转为 AST。如果源码符合语法规则，这一步就会顺利完成。但如果源码存在语法错误，这一步就会终止，并抛出一个“语法错误”
  - 随后，V8会生成这段代码的上下文

## 异步加载 JS 脚本时，各种类型的加载的区别

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

- 在默认情况下，浏览器的 cookie 信息是可以在同一个域名下的不同端口之间共享的。也就是说，在**同一个浏览器中**，如果 localhost:3000 设置了一个 cookie，那么 localhost:5000 就可以访问到这个 cookie

  - 如果不希望共享，则需要在设置 cookie 时设置sameSite参数，将 sameSite 参数设置为 "strict" 或 "lax"
  - 如果将 sameSite 设置为 "strict"，则浏览器会禁止在不同端口之间共享 cookie
  - 如果将 sameSite 设置为 "lax"，则浏览器会禁止在不同端口之间共享 cookie，除非请求是从当前站点的超链接发出的 -> 这意味着，如果在 localhost:3000 上设置了一个带有 sameSite=lax 的 cookie，则 localhost:5000 上的页面只有在从 localhost:3000 的超链接中访问时才能访问到这个 cookie

  ```javascript
  document.cookie = "name=John; sameSite=strict"
  ```

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

## 事件委托

- 事件委托指当有大量子元素触发事件时，将事件监听器绑定在父元素进行监听，此时数百个事件监听器变为了一个监听器，提升了网页性能
- 例如： React 把所有事件委托在 Root Element，用以提升性能

## e.currentTarget 与 e.target 有何区别

- `e.currentTarget`是表示事件监听器绑定的元素

- `e.target`是表示真正触发事件的元素

- 例如：

  ```javascript
  document.querySelector('#my-button').addEventListener('click', function(e) {
    console.log(e.currentTarget);
  });
  
  // 此时，e.currentTarget指向一个id为'my-button'的标签
  // 如果，这个id为'my-button'的标签里面还有一个'span'的标签，且点击的的是这个'span'，那此时的e.target指向'span'标签，而e.currentTarget仍然指向一个id为'my-button'的标签
  ```

## XSS与CSRF攻击

### XSS

- 允许攻击者在受信任的网站上注入恶意脚本。这些脚本可以在用户浏览网页时被执行，并可能导致各种后果，例如窃取用户数据、欺骗用户点击恶意链接、改变页面布局等
- XSS 攻击通常是通过将恶意脚本注入到网站的表单、评论、搜索框等输入字段中执行的。当用户浏览网页时，浏览器会解析并执行这些脚本

#### 应对策略

- 为了防止 XSS 攻击，网站应该对用户输入进行过滤和转义，例如对于评论等功能，应该对用户的评论进行过滤，并将其中的 HTML 标签转义为字符实体

- cookie开启HttpOnly，使得JS脚本将无法读取到该**cookie**信息（该cookie只能从服务端修改），这样能有效的防止XSS攻击

  - HttpOnly是包含在Set-Cookie HTTP响应头文件中的附加标志
  - 开启后，对于`document.cookie`来说，这条cookie是透明的
  - 例子：
    - 例如在评论区写了一段 hack JS，服务端因存在 XSS 漏洞，没有对 < 进行转义。导致这段 JS 在其他人打开此页面的时候也被执行了。
    - 如果在上面的 hack JS 中写了获取所有 cookie，并发送到某个第三方的服务器上，这样用户的登录信息就泄漏了。如果 cookie 开启了 http-only 之后，hack js 无法获取到用户的 cookie，它们的登录信息就无法泄漏了。

- 可以采用Content Security Policy（CSP）来防止 XSS 攻击，CSP可以指定浏览器可以执行哪些脚本的安全策略，例如，指定浏览器只能加载来自受信任的域名的脚本

  - CSP 策略的基本原理是通过添加 HTTP 标头来告诉浏览器哪些内容可以加载和执行，以及哪些内容应该被阻止。

  - 通过 CSP 策略来控制浏览器可以加载哪些 JavaScript、CSS、图片、字体和其他内容。

  - CSP 策略可以通过多种方式来定义，包括在 HTML 的标头、响应头、文件或 meta 标签中指定

    ```javascript
    // 网页的HTTP头中添加CSP
    Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'
    // 上述例子中，CSP策略允许从同一域名（'self'）加载JavaScript、CSS和图片
    ```

### CSRF

- 允许攻击者在用户不知情的情况下向受信任的网站发送恶意请求。攻击者通常会通过在受信任的网站上植入恶意链接或广告来执行此类攻击
- 例如，假设你已登录到你的银行帐户，并且浏览器中保留了登录会话的 cookie。攻击者如果能够让你点击某个恶意链接，就可以通过你的浏览器发送转账请求，而你并不知情

#### 应对策略

- 为了防止 CSRF 攻击，网站可以在表单中加入一个隐藏的令牌字段，并将其值存储在**服务器端的会话**中。当客户端发送请求时，服务器会检查请求中的令牌是否与会话中的令牌匹配。如果不匹配，则认为是 CSRF 攻击，并拒绝请求
- 或者也可以使用 cookie 的 sameSite 属性来防止 CSRF 攻击。同样地，sameSite 可以设置为 "strict" 或 "lax"。如果将 sameSite 设置为 "strict"，则浏览器会禁止从不同站点发送的请求携带 cookie。这可以有效防止 CSRF 攻击，因为攻击者无法在用户的浏览器中设置令牌 cookie

### 区别

- XSS是允许攻击者在受信任的网站上注入恶意脚本，这些脚本可以在用户浏览网页时被执行，并可能导致各种后果，例如窃取用户数据、欺骗用户点击恶意链接、改变页面布局等
- 而CSRF主要是允许攻击者在用户不知情的情况下向受信任的网站发送恶意请求。攻击者通常会通过在受信任的网站上植入恶意链接或广告来执行此类攻

## 如何计算白屏时间和首屏时间

- 白屏时间一般采用 `performance.timing` 对象中的 `navigationStart` 和 `domLoading` 属性。`navigationStart` 属性表示浏览器开始加载文档的时间，`domLoading` 属性表示浏览器开始解析文档的时间。因此，白屏时间就是 `domLoading - navigationStart` 的值
- 而首屏时间一般采用 `performance.timing` 对象中的 `navigationStart` 和 `domContentLoadedEventEnd` 属性。`domContentLoadedEventEnd` 属性表示浏览器完成首屏内容的渲染的时间。因此，首屏时间就是 `domContentLoadedEventEnd - navigationStart` 的值
