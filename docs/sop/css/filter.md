---
description: CSS 中filter的使用
title: 🔧 CSS filter
readingTime: false
tag:
 - CSS
recommend: 3
publish: true
---

## filter

> CSS filter 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。  

### 语法

```css
/* <filter-function> 值 */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* URL */
filter: url("filters.svg#filter-id");

/* 多个滤镜 */
filter: contrast(175%) brightness(3%);
filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

/* 不使用滤镜 */
filter: none;

/* 全局值 */
filter: inherit;
filter: initial;
filter: revert;
filter: revert-layer;
filter: unset;

```

### 示例

- #### **模糊** blur() 

> 将高斯模糊应用于输入图像

```css
filter: blur(5px);
```

- #### **亮度** brightness() 

> 将线性乘法器应用于输入图像，以调整其亮度。值为 `0%` 将创建全黑图像；值为 `100%` 会使输入保持不变，其他值是该效果的线性乘数。如果值大于 `100%` 将使图像更加明亮。

```css
filter: brightness(2);
```

- #### **阴影** drop-shadow

> 使用 `<shadow>` 参数沿图像的轮廓生成阴影效果。阴影语法类似于 `<box-shadow>`（在CSS 背景和边框模块中定义），但不允许使用 `inset` 关键字以及 `spread` 参数。与所有 `filter` 属性值一样，任何在 `drop-shadow()` 后的滤镜同样会应用在阴影上。

```css
filter: drop-shadow(16px 16px 10px black);
```

- #### 灰度 grayscale()

> 将图像转换为灰度图。值为 `100%` 则完全转为灰度图像，若为初始值 `0%` 则图像无变化。值在 `0%` 到 `100%` 之间，则是该效果的线性乘数。

```css
filter: grayscale(100%);
```

- #### 色相旋转 hue-rotate()

应用色相旋转。`<angle>` 值设定图像会被调整的色环角度值。值为 `0deg`，则图像无变化。

```css
filter: hue-rotate(90deg);
```

- #### 反转 invert()

反转输入图像。值为 `100%` 则图像完全反转，值为 `0%` 则图像无变化。值在 `0%` 和 `100%` 之间，则是该效果的线性乘数。

```css
filter: invert(100%);
```

- #### 透明度 opacity()

应用透明度。值为 `0%` 则使图像完全透明，值为 `100%` 则图像无变化。

```css
filter: opacity(50%);
```

- #### 饱和度 Clipboard()

改变图像饱和度。值为 `0%` 则是完全不饱和，值为 `100%` 则图像无变化。超过 `100%` 则增加饱和度。

```css
filter: saturate(200%);
```

- #### 深褐色 sepia()

将图像转换为深褐色。值为 `100%` 则完全是深褐色的，值为 `0%` 图像无变化。

```css
filter: sepia(100%)
```
**色相旋转基础效果如下**
<iframe width="1050" height="800" src="/my-blog/filter.html" style="border: 0"></iframe>



