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

> 正在尋找人員協助翻譯此 README。

> 支援簡單的[生成器](https://capsule-render.vercel.app/)。
> 但是，我們建議閱讀 README 以進行更詳細的調整。

## 導航

1. [如何使用](#如何使用)
2. [類型](#類型)
3. [顏色](#顏色)
4. [自定義顏色列表](#自定義顏色列表)
5. [區域](#區域)
6. [反轉](#反轉)
7. [高度](#高度)
8. [文字](#文字)
9. [描述](#描述)
10. [文字背景](#文字背景)
11. [文字動畫](#文字動畫)
12. [字體顏色](#字體顏色)
13. [字體大小](#字體大小)
14. [字體對齊 - X](#字體對齊-x)
15. [字體對齊 - Y](#字體對齊-y)
16. [描述大小](#描述大小)
17. [描述對齊 - X](#描述對齊-x)
18. [描述對齊 - Y](#描述對齊-y)
19. [旋轉](#旋轉)
20. [演示](#演示)

任何想法可以提交到 -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) 或 [PR](https://github.com/kyechan99/capsule-render/pulls)

# 如何使用

```
https://capsule-render.vercel.app/api?
```

只需在此 URL 後面添加查詢參數即可。像這樣：

Markdown 格式：

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML 格式：

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## 類型

類型數據用於更改背景圖像。

- [wave](#wave)：預設
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

## 顏色

更改背景圖像！

- `&color=auto`：預設隨機顏色。列表在[這裡](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto`：預設隨機顏色，但由時間決定
- `&color=random`：完全隨機的顏色。我不知道會顯示什麼顏色
- `&color=gradient`：預設隨機漸變。列表在[這裡](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient`：預設隨機漸變，但由時間決定
- `&color=_hexcode`：預設(#B897FF)
- `&color=_custom_gradient`：自定義漸變。如果寫成 `&color=0:EEFF00,100:a82da8`，它將被轉換為 { 0%: 'EEFF00', 100%: 'a82da8' }。(例如 [演示](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

如果使用 `auto` 模式，無需更改 `fontColor`。
`auto` 也會自動更改字體顏色。

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> 如果使用靜態顏色，不要寫 '#'

> 什麼時候使用 `timeAuto` 和 `timeGradient`？
>
> 在同時使用 `header` 和 `footer` 區域時。

## 自定義顏色列表

你可以**自定義**將隨機出現的顏色列表，僅適用於 `&color=auto` 和 `&color=gradient`。

在 URL 中添加 `&customColorList=`。

- 如果使用 `&color=auto`，請查看[調色板列表](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)。
- 如果使用 `&color=gradient`，請查看[漸變列表](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)。

選擇你想要的顏色模式並記住其 `idx` 值。

例如，如果 idx 值為 0、2 和 3，則寫：`&customColorList=0,2,3`

如果你想讓 `idx=2` 出現多次，可以重複寫入。(例如 `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## 主題

你可以使用 `theme=` 來使用指定的組合。

即使使用了 `color` 和 `fontColor`，主題具有最高優先級。

在 [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json) 查看可用主題列表。

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> 我目前正在逐步添加來自 [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) 的組合。

## 區域

區域數據用於反轉背景圖像。

- `&section=header`：(預設)
- `&section=footer`

在 URL 中添加 `&section=`

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## 反轉

左右反轉圖像。(同時反轉顏色)

- `&reversal=false`：(預設)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## 高度

更改圖像大小。預設值為 120。

在 URL 中添加 `&height=`

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> 不要寫 `px`

## 文字

在圖像上輸入文字。

添加 `&text=`。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> 你不能使用某些特殊字符。如 '#'、'&'、'/' 等...
>
> 這會使 API 混淆

> 建議只使用 `%20` (空格) 和 `-nl-` (換行)

## 描述

在圖像上輸入描述。

添加 `&desc=`。

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> 你不能使用某些特殊字符。如 '#'、'&'、'/' 等...
>
> 這會使 API 混淆

> 建議只使用 `%20` (空格)

## 文字背景

文字的背景。

添加 `&textBg=true` 來啟用。

> 如果你想增加背景大小，
> 在文字值之間添加 `%20`。
> 這是因為背景大小取決於英文文字的長度。(%20 表示空格)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## 文字動畫

使文字動態化。

如果你想使用，添加 `&animation=`。

- `fadeIn`：淡入 1.2 秒
- `scaleIn`：縮放進入 0.8 秒
- `blink`：閃爍 0.6 秒
- `blinking`：閃爍 1.6 秒
- `twinkling`：閃爍 4 秒

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## 字體顏色

更改文字顏色。預設值為 000000。

值應為去掉 '#' 的十六進制代碼

在 **Text** 查詢後添加 `&fontColor=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## 字體大小

更改文字字體大小。預設值為 70。

在 **Text** 查詢後添加 `&fontSize=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> 不要寫 `px`

## 字體對齊-X

更改文字水平對齊(x)。寫入**0~100之間**的數字

`&fontAlign=`：預設值為 50。圖像中心

> 如果在 `&text=` 中有多行(`-nl-`)，提供多個 `&fontAlign=` 將對每行單獨應用不同的水平對齊。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## 字體對齊-Y

更改文字垂直對齊(y)。寫入**0~100之間**的數字

`&fontAlignY=`：單行預設值為 50(圖像中心)。對於多行(由 `-nl-` 分隔)，預設值將被計算以使行堆疊在一起並居中。

> 如果在 `&text=` 中有多行(`-nl-`)，提供多個 `&fontAlignY=` 將對每行單獨應用不同的垂直對齊。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## 描述大小

更改描述字體大小。預設值為 20。

在 **desc** 查詢後添加 `&descSize=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> 不要寫 `px`

## 描述對齊-X

更改描述水平對齊(x)。寫入**0~100之間**的數字

`&descAlign=`：預設值為 50。圖像中心

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## 描述對齊-Y

更改文字垂直對齊(y)。寫入**0~100之間**的數字

`&descAlignY=`：預設值為 60。圖像中心

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## 旋轉

使用 `&rotate=` 來旋轉文字。

你也可以使用負數。

> 推薦數字範圍：☞ `0 ~ 360`，`0 ~ -360`。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## 描邊

更改文字描邊。

在查詢後添加 `&stroke=`

值應為去掉 '#' 的十六進制代碼

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> 建議與 `strokeWidth` 一起使用。
>
> 單獨使用時，strokeWidth 預設為 1。

## 描邊寬度

更改文字描邊寬度。

在描邊查詢後添加 `&strokeWidth=`

值必須大於或等於 0。

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> 建議與 `stroke` 一起使用。
>
> 單獨使用時，stroke 預設為 'B897FF'。

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
