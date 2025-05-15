<p align='center'>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=capsule%20render&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&descAlignY=51&descAlign=62"/>
</p>

<p align='center'>
  <a href="https://github.com/kyechan99/capsule-render/labels/Idea">
    <img src="https://img.shields.io/badge/IDEA%20ISSUE%20-%23F7DF1E.svg?&style=for-the-badge&&logoColor=white"/>
  </a>
  <a href="#demo">
    <img src="https://img.shields.io/badge/DEMO%20-%234FC08D.svg?&style=for-the-badge&&logoColor=white"/>
  </a>
  <a href="https://capsule-render.vercel.app/">
    <img src="https://img.shields.io/badge/Generator%20-%235c86fa.svg?&style=for-the-badge&&logoColor=white"/>
  </a>
</p>
<p align="center"> 
  <a href="../README.md">English</a> 
  ·
  <a href="/docs/README_kr.md">한국어</a> 
  .
  <a href="/docs/README_fr.md">Français</a>
  .
  <a href="/docs/README_de.md">Deutsch</a>
  .
  <a href="/docs/README_zh-cn.md">简体中文</a>  
  .
  <a href="/docs/README_zh-tw.md">繁體中文</a>
  .
  <a href="/docs/README_zh-hk.md">繁體粤语</a>
  . 
  <a href="/docs/README_pt-br.md">Português (Brasileiro)</a>
  . 
  <a href="/docs/README_jp.md">日本語</a>
</p>
<br/>

> 正在寻找人员协助翻译此 README。

> 支持简单的[生成器](https://capsule-render.vercel.app/)。
> 但是，我们建议阅读 README 以进行更详细的调整。

## 导航

1. [如何使用](#如何使用)
2. [类型](#类型)
3. [颜色](#颜色)
4. [自定义颜色列表](#自定义颜色列表)
5. [区域](#区域)
6. [反转](#反转)
7. [高度](#高度)
8. [文本](#文本)
9. [描述](#描述)
10. [文本背景](#文本背景)
11. [文本动画](#文本动画)
12. [字体颜色](#字体颜色)
13. [字体大小](#字体大小)
14. [字体对齐 - X](#字体对齐-x)
15. [字体对齐 - Y](#字体对齐-y)
16. [描述大小](#描述大小)
17. [描述对齐 - X](#描述对齐-x)
18. [描述对齐 - Y](#描述对齐-y)
19. [旋转](#旋转)
20. [演示](#演示)

任何想法可以提交到 -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) 或 [PR](https://github.com/kyechan99/capsule-render/pulls)

# 如何使用

```
https://capsule-render.vercel.app/api?
```

只需在此 URL 后面添加查询参数即可。像这样：

Markdown 格式：

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML 格式：

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## 类型

类型数据用于更改背景图像。

- [wave](#wave)：默认
- [egg](#egg)
- [shark](#shark)
- [slice](#slice)
- [rect](#rect)
- [soft](#soft)
- [rounded](#rounded)
- [cylinder](#cylinder)
- [waving](#waving)
- [venom](#venom)
- [speech](#speech)
- [blur](#blur)
- [transparent](#transparent)

在 URL 中添加 `&type=`

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## 颜色

更改背景图像！

- `&color=auto`：预设随机颜色。列表在[这里](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto`：预设随机颜色，但由时间决定
- `&color=random`：完全随机的颜色。我不知道会显示什么颜色
- `&color=gradient`：预设随机渐变。列表在[这里](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient`：预设随机渐变，但由时间决定
- `&color=_hexcode`：默认(#B897FF)
- `&color=_custom_gradient`：自定义渐变。如果写成 `&color=0:EEFF00,100:a82da8`，它将被转换为 { 0%: 'EEFF00', 100%: 'a82da8' }。(例如 [演示](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

如果使用 `auto` 模式，无需更改 `fontColor`。
`auto` 也会自动更改字体颜色。

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> 如果使用静态颜色，不要写 '#'

> 什么时候使用 `timeAuto` 和 `timeGradient`？
>
> 在同时使用 `header` 和 `footer` 区域时。

## 自定义颜色列表

你可以**自定义**将随机出现的颜色列表，仅适用于 `&color=auto` 和 `&color=gradient`。

在 URL 中添加 `&customColorList=`。

- 如果使用 `&color=auto`，请查看[调色板列表](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)。
- 如果使用 `&color=gradient`，请查看[渐变列表](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)。

选择你想要的颜色模式并记住其 `idx` 值。

例如，如果 idx 值为 0、2 和 3，则写：`&customColorList=0,2,3`

如果你想让 `idx=2` 出现多次，可以重复写入。(例如 `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## 主题

你可以使用 `theme=` 来使用指定的组合。

即使使用了 `color` 和 `fontColor`，主题具有最高优先级。

在 [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json) 查看可用主题列表。

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> 我目前正在逐步添加来自 [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) 的组合。

## 区域

区域数据用于反转背景图像。

- `&section=header`：(默认)
- `&section=footer`

在 URL 中添加 `&section=`

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## 反转

左右反转图像。(同时反转颜色)

- `&reversal=false`：(默认)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## 高度

更改图像大小。默认值为 120。

在 URL 中添加 `&height=`

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> 不要写 `px`

## 文本

在图像上输入文本。

添加 `&text=`。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> 你不能使用某些特殊字符。如 '#'、'&'、'/' 等...
>
> 这会使 API 混淆

> 建议只使用 `%20` (空格) 和 `-nl-` (换行)

## 描述

在图像上输入描述。

添加 `&desc=`。

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> 你不能使用某些特殊字符。如 '#'、'&'、'/' 等...
>
> 这会使 API 混淆

> 建议只使用 `%20` (空格)

## 文本背景

文本的背景。

添加 `&textBg=true` 来激活。

> 如果你想增加背景大小，
> 在文本值之间添加 `%20`。
> 这是因为背景大小取决于英文文本的长度。(%20 表示空格)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## 文本动画

使文本动态化。

如果你想使用，添加 `&animation=`。

- `fadeIn`：淡入 1.2 秒
- `scaleIn`：缩放进入 0.8 秒
- `blink`：闪烁 0.6 秒
- `blinking`：闪烁 1.6 秒
- `twinkling`：闪烁 4 秒

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## 字体颜色

更改文本颜色。默认值为 000000。

值应为去掉 '#' 的十六进制代码

在 **Text** 查询后添加 `&fontColor=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## 字体大小

更改文本字体大小。默认值为 70。

在 **Text** 查询后添加 `&fontSize=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> 不要写 `px`

## 字体对齐-X

更改文本水平对齐(x)。写入**0~100之间**的数字

`&fontAlign=`：默认值为 50。图像中心

> 如果在 `&text=` 中有多行(`-nl-`)，提供多个 `&fontAlign=` 将对每行单独应用不同的水平对齐。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## 字体对齐-Y

更改文本垂直对齐(y)。写入**0~100之间**的数字

`&fontAlignY=`：单行默认值为 50(图像中心)。对于多行(由 `-nl-` 分隔)，默认值将被计算以使行堆叠在一起并居中。

> 如果在 `&text=` 中有多行(`-nl-`)，提供多个 `&fontAlignY=` 将对每行单独应用不同的垂直对齐。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## 描述大小

更改描述字体大小。默认值为 20。

在 **desc** 查询后添加 `&descSize=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> 不要写 `px`

## 描述对齐-X

更改描述水平对齐(x)。写入**0~100之间**的数字

`&descAlign=`：默认值为 50。图像中心

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## 描述对齐-Y

更改文本垂直对齐(y)。写入**0~100之间**的数字

`&descAlignY=`：默认值为 60。图像中心

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## 旋转

使用 `&rotate=` 来旋转文本。

你也可以使用负数。

> 推荐数字范围：☞ `0 ~ 360`，`0 ~ -360`。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## 描边

更改文本描边。

在查询后添加 `&stroke=`

值应为去掉 '#' 的十六进制代码

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> 建议与 `strokeWidth` 一起使用。
>
> 单独使用时，strokeWidth 默认为 1。

## 描边宽度

更改文本描边宽度。

在描边查询后添加 `&strokeWidth=`

值必须大于或等于 0。

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> 建议与 `stroke` 一起使用。
>
> 单独使用时，stroke 默认为 'B897FF'。

# 演示 <a id="demo">

## Wave <a id="wave">

![wave](https://capsule-render.vercel.app/api?type=wave&color=auto&height=200&text=WAVE)

## Egg <a id="egg">

![egg](https://capsule-render.vercel.app/api?type=egg&color=auto&height=210)

## Shark <a id="shark">

![shark](https://capsule-render.vercel.app/api?type=shark&color=gradient&height=140)

## Slice <a id="slice">

![slice](https://capsule-render.vercel.app/api?type=slice&color=auto&height=200&text=SLICE&fontAlign=70&rotate=13&fontAlignY=25&desc=desc%20function%20is%20also%20rotated.&descAlign=60&descAlignY=44)

## Rect <a id="rect">

![rect](https://capsule-render.vercel.app/api?type=rect&color=gradient&text=%20%20RECT%20%20&fontAlign=30&fontSize=30&textBg=true&desc=Use%20%27textBg%27%20to%20highlight%20%27text%27&descAlign=60&descAlignY=50)

## Soft <a id="soft">

![soft](https://capsule-render.vercel.app/api?type=soft&color=auto&text=Good%20to%20use%20with%20other%20readme&fontSize=40&animation=twinkling)

## Rounded <a id="rounded">

![rounded](https://capsule-render.vercel.app/api?type=rounded&color=timeAuto&text=Rounded%20with%20stroke&fontAlignY=50&fontSize=40&height=200&stroke=000000&strokeWidth=2)

## Cylinder <a id="cylinder">

![cylinder](https://capsule-render.vercel.app/api?type=cylinder&color=auto&text=Cylinder&fontAlignY=45&fontSize=40&height=150&animation=blinking&desc=desc%20is%20also%20animated&descAlignY=70)

## Waving <a id="waving">

![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Waving!&fontAlign=80&fontAlignY=40&color=gradient)

## Transparent <a id="transparent">

![transparent](https://capsule-render.vercel.app/api?type=transparent&fontColor=703ee5&text=Transparent&height=150&fontSize=60&desc=Only%20Use%20Text&descAlignY=75&descAlign=60)

## Venom <a id="venom">

![venom](https://capsule-render.vercel.app/api?type=venom&height=200&text=I%20am%20Venom.&fontSize=70&color=0:8871e5,100:b678c4&stroke=b678c4)

## Speech <a id="speech">

![speech](https://capsule-render.vercel.app/api?type=speech&height=200&fontSize=45&color=gradient&text=speech-nl-bubble&animation=blinking&fontAlign=30,60&fontAlignY=35,55)

## Blur <a id="blur">

![blur](https://capsule-render.vercel.app/api?type=blur&height=300&color=gradient&text=Blur&strokeWidth=2&section=footer&reversal=true&fontAlign=50&stroke=E0E0E0&fontSize=55&textBg=false)

<hr/>
