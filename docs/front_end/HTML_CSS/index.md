# HTML&CSS

## HTML

## CSS的一些常识

#### 有哪些 css 属性不能展示动画效果

- css 不能在 display:none 和 display:block 之间进行动画
- 也不能在 height:0 和 height:auto 之间进行动画

#### 如何画一个三角形？

- 

#### 如何实现一个左侧固定 300px，右侧自适应的布局

- flex
- grid（简单一点）

#### 选择器的权重

- 以下权重依次下降
  - `id` 选择器，如`#app`
  - `class`、`attribute` 与 `pseudo-classes` 选择器，如 `.header`、`[type="radio"]` 与 `:hover`
  - `type` 标签选择器和伪元素选择器，如 `h1`、`p` 和 `::before`
- 另外，内联样式以及`!important`(最高) 具有更高的权重

#### 什么是样式抖动

- 没有事先指定元素的具体高宽，在数据还没加载的时候，有高度A，宽度B，而随后数据加载进来，因为有数据的填充，所以此时元素被撑大，所以出现了抖动

#### 伪类元素和伪元素的区别

- 伪类使用单冒号，而伪元素使用双冒号。如 `:hover` 是伪类，`::before` 是伪元素
- 伪元素会在文档流生成一个新的元素，并且可以使用 `content` 属性设置内容

#### 如何实现黑夜模式

- 一行代码解决

  ```css
  html[theme='dark-mode'] {
    filter: invert(1) hue-rotate(180deg);
  }
  ```

- 上面的代码采用了两个滤镜， `invert`和`hue-rotate`

  - **invert**滤镜可以帮助反转应用程序的颜色方案(黑色 -> 白色 ,白色 -> 黑色，其他颜色也是同理)
  - **hue-rotate**滤镜可以帮助我们处理所有其他非黑白的颜色（将色调旋转180度，我们确保应用程序的颜色主题不会改变，而只是减弱它的颜色）

- 唯一的问题是，也会反转你应用程序中的所有图像，所以要为图片添加相同的规则来实现反转效果（负负得正）

  ```css
  html[theme='dark-mode'] img{
    filter: invert(1) hue-rotate(180deg);
  }
  ```

- 同时，我们还可以让这个过程变得丝滑一点

  ```css
  html {
    transition: color 300ms, background-color 300ms;
  }
  ```

#### 有什么方法可以隐藏页面？

- ```css
  /* 移出文档流 */
  display: none;
  
  /* 透明度为 0，仍在文档流中，当作用于其上的事件(如点击)仍有效 */
  opacity: 0;
  
  /* 透明度为 0，仍在文档流中，但作用于其上的事件(如点击)无效 */
  visibility: hidden;
  
  /* 移出文档流，但是再次显示时消耗性能低 */
  content-visibility: hidden;
  
  /* 通过绝对定位于当前页面不可见的位置 */
  position: absolute;
  top: -9000px;
  left: -9000px;
  
  /* 字体大小设置为0 */
  font-size: 0;
  ```

- 





































