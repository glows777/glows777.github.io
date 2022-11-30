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

