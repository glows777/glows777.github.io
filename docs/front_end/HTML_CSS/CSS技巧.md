### 一些好玩得css特效

  

1. 子绝父相

  

2. 设置hover时，可以用`cursor:pointer`,可以设置为悬浮时，为手势点击，default则是默认箭头

  

3. 下拉菜单select，设置`apperance:none`,可以去除下拉的箭头。同时，会变得与前面的字体行高一样

 - -webkit-appearance,-moz-appearance,用于chrome，firefox兼容

  

4. 实现文字垂直居中，设置行高与容器高度一样即可

  

5. 图片hover时，显示文字出来

 - 这个效果可以玩一玩，推广到浮动文本，下拉导航，出现解释内容等隐藏显示效果

 - 先div，class="u"。里面放一个img标签以及一个class="a"的存放文本div

 - css中，a设置动画:`transition：opacity 0.2s ease-in ;opacity:0`,意思是，时间2s，速度ease-in，透明度opacity是0

 - 在设置css，`u:hover .a{opacity:1;}`,意思是u悬浮时，a文本的透明度为1，显示出来

  

 //html部分

  

 ```html

 <div class="u">

 <img src="../taylor.jpg"/ alt="">

 <div class="a">aaaa</div>

 </div>

 ```

  

 //css部分

  

 ```css

 .a{

 transition:opacity 0.2s ease-in ;

   opacity:0;

 }

 u:hover .a{

   opacity:1;

 }

 <!-- u也可以改为其他的内容，使得悬浮在其内容时，a的内容出现 -->

 ```

  

6. 通过定位+移动来实现在父元素中垂直左右居中

  

 - translate(X,Y)（用百分比表示的话，是按照本身比例位移。x，y表示水平，垂直方向）

 - 基本步骤是，给想要在父元素设置相对定位

 - 子元素设置绝对定位,并且top和left各50%，然后设置transform:transalte(-50%,-50%)

 - position定位的效果：（红点是偏移点）

 - translate后的效果：（红点是偏移点）

  

 html部分

  

 ```html

 <div class="u">

   <div class="a">555666777</div>

 </div> 

 ```

  

 css部分

  

 ```css

 .u{

   position:relative;

 }

 .a{

   position:absolute;

   top:50%;

   left:50%;

   transform:translate(-50%,-50%);

 }

 ```

  

7. box-shawdow，三个必选参数:水平,垂直，模糊的距离

  

8. background-image:linear-gradient(),设置渐变的颜色背

  

 - 至少要有两种颜色+渐变的范围（不写范围的话，默认为）

 - 可以设置渐变轴的角度

  

9. z-index，position位置不是静态时，谁的z-index大，谁在上层，底层的会覆盖