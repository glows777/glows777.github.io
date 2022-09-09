# react
## react历史
### react应用场景
- 前端开发
- 移动应用
- 结合Eletron，进行桌面开发
- react-fiber **->** 写3d的，基于webgl
### react发展历史
- 2010年 **->** Facebook首次引入组合式组件思想
- 2011年，创造react原型 **->** FaxJS
	- 可在服务端，客户端渲染
	- 响应式
	- 性能好
	- 前端代码组件级别复用封装，函数式声明
- 2012年，基于FaxJS，创造react
- 2013年，react正式开源 **->** *React, A JavaScript  library for building user interfaces*
- 2014年至今 。生态爆发，各种工具开始涌现 **->** ![image](https://raw.githubusercontent.com/glows777/image-hosting/main/杂图/image.3pfoiorq2xa0.webp)
## react设计思路
### UI设计的痛点
- ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.29df2pyxpsis.webp)首先修改JS变量以及书写onclick等监听，后在更改UI（DOM接口去更改）**->** 过程式编程
- 综上
	- 状态更新，UI不会不会自动更新，需要手动调用DOM
	- 代码缺少封装隔离，没有组件
	- UI之间数据依赖关系需要手动维护，容易形成“回调地狱”
### 转换式&响应式
- 转换式系统
	- 给定输入，求解输出
	- 编译器
	- 数值运算
	- 算法题
- 响应式系统
	- 监听事件 **->** 消息驱动
	- 监控系统
	- UI界面
	- JS异步编程&前端UI
		- 事件 **->** 执行回调 **->** 状态变更 **->** UI更新
		- 理想 **->** UI自动更新，组件化，代码可复用，可封装，状态之间互相依赖，只需声明
### 组件化的原则
- 组件是组件的组合或者原子组件
- 组件内部拥有状态，对外屏蔽，外部不可见
- 父组件可将状态传入组件内部 **->** 父组件可以控制子组件（ 子组件对外暴露接口）**->** 接口化
#### 状态归属问题
-  组件需要共享状态的时候，状态需要上移（因为只有父组件可以控制子组件） **->** 失去组件复用的初衷 **->** Redux状态管理库解决
- 组件具有良好的局部性 **->** 尽量把这些状态放在一起 **->** 类似于CPU调用内存的局部性
- 状态归属两个结点向上寻找最近的祖宗结点！！！
#### *函数在JS中是一等公民* **->** 传递函数，实现跨组件状态变化
- React是单向数据流 **->** 只能由父组件传给子组件（子组件不能传值给父组件），子组件要改变父组件的状态，只能由执行父组件传递下来的函数去更改
- 如何解决状态不合理上升 **->** Redux等解决
- 组件状态改变后，如何更新DOM **->** react的DOM更新算法
#### 总结：
- ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.1n0knwd7381s.webp) 
- 组件声明了状态和UI的映射关系
- 组件有Props和State两种状态 **->** 接受父组件传入的Props状态（提供复用性），组件内部自己维护的私有State状态 **->** 根据当前的状态，返回一个UI 
	- 所以应该差不多类似这种 **->**  ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.6x6oecu3l7k0.webp)
		- react生命周期![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.35vuz23iqhe0.webp)
			- 重点关注Mounting和Updating过程
	- 组件可由其他组件拼装
## react的hooks写法
### 副作用
- xxx
- useEffect的执行时机 **->** 组件挂载的时候执行（没有传入第二个参数，数组时）
### hooks的使用法则
- 不要在循环，条件或者嵌套函数中调用hooks
### hooks是怎么工作
## react实现
### react的JSX不符合JS标准
- 直接转译
- 原因 **->** html的本质是一个树状结构，每个结点有自己的属性的数据结构 
### 返回的JSX发生改变时，如何更新DOM
#### Virtual DOM（虚拟DOM）
- ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.6mx8o2sebgk0.webp) 
- DOM操作很耗时，耗性能 **->** diff算法来找到不同，只更新diff
- VD是JS维护的一个对象，与DOM类似，可以和DOM建立一一对应关系
- 赋予了react声明式api **->** 自动更新UI
- 实现过程 **->** ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.r4z4xj0pdcw.webp) 
- 结点更新 **->** diff算法计算，比对（递归过程 **->** 父组件状态发生改变，所有的子组件也会递归的执行一次render函数 **->** react性能问题） **->** re-render VD
#### diff算法（how?)
- 更新次数少
- 计算速度快（how tradeoff权衡）
- ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.70bimo5pbbg0.webp) 
- 局部最优diff **->** O(n)复杂度
- diff算法的原则 **->** ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.5ehoy71qcfg0.webp) 
### State/Props更新时，如何重新触发render函数
## react状态管理库 **->** redux等
### 核心思想
- 将状态抽离到UI外部进行统一管理
### 缺点
- 组件依赖于外部的状态管理store，会降低组件的复用性 **->** 强耦合
- 基本只会出现在业务代码中，组件库一般不会使用 **->** 偏业务
- 原则上，store只存放一些**距离很远**的组件的状态，且需要“通信”
## 应用级别框架
- ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.67tbq14n9680.webp) 
## 拓展
- DOM是浏览器维护的，JS是通过DOMapi去修改DOM，DOM本身不是JS的变量
- HTML本质上是一个 树状结构，每一个结点都有自己的属性的数据结构
- 指令式编程 **->** c语言
- 声明式编程 **->** 
- 响应式编程 **->** 声明式plus **->** 自己响应自己
- 前端框架是声明式的 **->** 为什么浏览器不直接支持声明式
	- 浏览器作为应用平台，不能提高过于高级的支持
	- 提供更高级的编程支持，会降低自由度
- 状态机
	- 当前状态，收到外部时间，迁移到下一个状态 **->** ![image](https://cdn.jsdelivr.net/gh/glows777/image-hosting@main/杂图/image.82s3dicqup8.webp) 
- 高聚合，低耦合
- 微服务等 **->** “信任”问题
- 虚拟DOM **->** 响应式编程 **->** react的核心
