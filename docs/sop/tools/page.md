---
sticky: 202309252229
description: 开发中常用的工具网站
title: 🌐 dev Tools Page
readingTime: false
tag:
 - Tool
sidebar: true
top: 1
publish: true
---

### 1、随机图片

这是一个可以生产随机图片的网站，可以通过修改一些地图获取到一张制定规格或样式的图片

- 获取一张正方形的图片【图一】 https://picsum.photos/200
- 获取一张长方形（长 300 宽 200）的照片【图二】 https://picsum.photos/300/200

- 获取一张灰度的图片【图三】https://picsum.photos/200/300?grayscale
- 获取一张带模糊度的图片（灰度值为1-10）【图四】https://picsum.photos/200/300/?blur
- 获取一张灰色模糊的图片【图五】https://picsum.photos/id/870/200/300?grayscale&blur=2
- 获取一张指定格式的图片【图六】https://picsum.photos/200/300.jpg

**提示：**

>1、当前随机图片网站需要进行外网访问
> 
>2、当图片因浏览器缓存原因无法变化时，添加random参数防止被缓存
> 
>```html
> <img src="https://picsum.photos/200/300?random=1">
> ```

<style>
    .box {
        width: 1000px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
    }
    .item {
        margin: 10px;
        text-align: center;
    }
    .box img {
        cursor: pointer;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .description {
        margin-top: 5px;
        font-size: 14px;
    }
    ul {
        width: 1000px;
    }
    strong {
        color: red;
    }
</style>
<div class="box">
    <div class="item">
        <img src="https://picsum.photos/200" />
        <div class="description">正方形的图片</div>
    </div>
    <div class="item">
        <img src="https://picsum.photos/300/200" />
        <div class="description">长方形的图片</div>
    </div>
    <div class="item">
        <img src="https://picsum.photos/300/200?grayscale" />
        <div class="description">灰色图片</div>
    </div>
    <div class="item">
        <img src="https://picsum.photos/300/200?blur=5" />
        <div class="description">带模糊度图片</div>
    </div>
    <div class="item">
        <img src="https://picsum.photos/300/200?grayscale&blur=2" />
        <div class="description">灰度模糊的图片</div>
    </div>
    <div class="item">
        <img src="https://picsum.photos/300/200.jpg" />
        <div class="description">指定格式的图片(jpg)</div>
    </div>
</div>

