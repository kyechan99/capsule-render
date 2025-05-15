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

> 而家搵緊人幫手翻譯呢個 README。

> 支援簡單嘅[生成器](https://capsule-render.vercel.app/)。
> 不過，我哋建議睇埋 README 嚟做更詳細嘅調整。

## 導航

1. [點樣用](#點樣用)
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
13. [字體大細](#字體大細)
14. [字體對齊 - X](#字體對齊-x)
15. [字體對齊 - Y](#字體對齊-y)
16. [描述大細](#描述大細)
17. [描述對齊 - X](#描述對齊-x)
18. [描述對齊 - Y](#描述對齊-y)
19. [旋轉](#旋轉)
20. [示範](#示範)

有咩諗法都可以提交去 -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) 或者 [PR](https://github.com/kyechan99/capsule-render/pulls)

# 點樣用

```
https://capsule-render.vercel.app/api?
```

喺呢個 URL 後面加查詢參數就得。好似咁：

Markdown 格式：

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML 格式：

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## 類型

類型數據用嚟改背景圖像。

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

喺 URL 度加 `&type=`

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## 顏色

改背景圖像！

- `&color=auto`：預設隨機顏色。列表喺[呢度](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto`：預設隨機顏色，但係由時間決定
- `&color=random`：完全隨機嘅顏色。我都唔知會顯示咩顏色
- `&color=gradient`：預設隨機漸變。列表喺[呢度](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient`：預設隨機漸變，但係由時間決定
- `&color=_hexcode`：預設(#B897FF)
- `&color=_custom_gradient`：自定義漸變。如果寫成 `&color=0:EEFF00,100:a82da8`，佢會轉換做 { 0%: 'EEFF00', 100%: 'a82da8' }。(例如 [示範](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

如果用 `auto` 模式，唔使改 `fontColor`。
`auto` 都會自動改字體顏色。

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> 如果用靜態顏色，唔好寫 '#'

> 幾時用 `timeAuto` 同 `timeGradient`？
>
> 同時用 `header` 同 `footer` 區域嘅時候。

## 自定義顏色列表

你可以**自定義**將會隨機出現嘅顏色列表，淨係適用於 `&color=auto` 同 `&color=gradient`。

喺 URL 度加 `&customColorList=`。

- 如果用 `&color=auto`，請睇[調色板列表](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)。
- 如果用 `&color=gradient`，請睇[漸變列表](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)。

揀你想要嘅顏色模式並記住佢嘅 `idx` 值。

例如，如果 idx 值係 0、2 同 3，就寫：`&customColorList=0,2,3`

如果你想畀 `idx=2` 出現多次，可以重複寫。(例如 `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## 主題

你可以用 `theme=` 嚟用指定嘅組合。

就算用咗 `color` 同 `fontColor`，主題都有最高優先級。

喺 [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json) 睇可用主題列表。

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> 我而家慢慢加緊嚟自 [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) 嘅組合。

## 區域

區域數據用嚟反轉背景圖像。

- `&section=header`：(預設)
- `&section=footer`

喺 URL 度加 `&section=`

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

改圖像大細。預設值係 120。

喺 URL 度加 `&height=`

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> 唔好寫 `px`

## 文字

喺圖像上面輸入文字。

加 `&text=`。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> 你唔可以用某啲特殊字符。好似 '#'、'&'、'/' 咁...
>
> 呢啲會令 API 混亂

> 建議淨係用 `%20` (空格) 同 `-nl-` (換行)

## 描述

喺圖像上面輸入描述。

加 `&desc=`。

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> 你唔可以用某啲特殊字符。好似 '#'、'&'、'/' 咁...
>
> 呢啲會令 API 混亂

> 建議淨係用 `%20` (空格)

## 文字背景

文字嘅背景。

加 `&textBg=true` 嚟啟用。

> 如果你想增加背景大細，
> 喺文字值之間加 `%20`。
> 因為背景大細取決於英文文字嘅長度。(%20 表示空格)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## 文字動畫

令文字動態化。

如果你想用，加 `&animation=`。

- `fadeIn`：淡入 1.2 秒
- `scaleIn`：縮放進入 0.8 秒
- `blink`：閃爍 0.6 秒
- `blinking`：閃爍 1.6 秒
- `twinkling`：閃爍 4 秒

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## 字體顏色

改文字顏色。預設值係 000000。

值應該係去咗 '#' 嘅十六進制代碼

喺 **Text** 查詢後面加 `&fontColor=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## 字體大細

改文字字體大細。預設值係 70。

喺 **Text** 查詢後面加 `&fontSize=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> 唔好寫 `px`

## 字體對齊-X

改文字水平對齊(x)。寫**0~100之間**嘅數字

`&fontAlign=`：預設值係 50。圖像中心

> 如果喺 `&text=` 度有多行(`-nl-`)，提供多個 `&fontAlign=` 會對每行單獨應用唔同嘅水平對齊。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## 字體對齊-Y

改文字垂直對齊(y)。寫**0~100之間**嘅數字

`&fontAlignY=`：單行預設值係 50(圖像中心)。對於多行(由 `-nl-` 分隔)，預設值會計算嚟令行堆疊喺一齊並居中。

> 如果喺 `&text=` 度有多行(`-nl-`)，提供多個 `&fontAlignY=` 會對每行單獨應用唔同嘅垂直對齊。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## 描述大細

改描述字體大細。預設值係 20。

喺 **desc** 查詢後面加 `&descSize=`

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> 唔好寫 `px`

## 描述對齊-X

改描述水平對齊(x)。寫**0~100之間**嘅數字

`&descAlign=`：預設值係 50。圖像中心

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## 描述對齊-Y

改文字垂直對齊(y)。寫**0~100之間**嘅數字

`&descAlignY=`：預設值係 60。圖像中心

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## 旋轉

用 `&rotate=` 嚟旋轉文字。

你都可以用負數。

> 建議數字範圍：☞ `0 ~ 360`，`0 ~ -360`。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## 描邊

改文字描邊。

喺查詢後面加 `&stroke=`

值應該係去咗 '#' 嘅十六進制代碼

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> 建議同 `strokeWidth` 一齊用。
>
> 單獨使用嘅時候，strokeWidth 預設係 1。

## 描邊闊度

改文字描邊闊度。

喺描邊查詢後面加 `&strokeWidth=`

值必須大過或者等於 0。

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> 建議同 `stroke` 一齊用。
>
> 單獨使用嘅時候，stroke 預設係 'B897FF'。

# 示範 <a id="demo">

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
