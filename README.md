<p align='center'>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=capsule%20render&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&descAlignY=51&descAlign=62"/>
</p>

<p align="center">    
  <a href="#demo">
    <img src="https://img.shields.io/badge/DEMO%20-%234FC08D.svg?&logoColor=white"/>
  </a>
  <a href="https://capsule-render.vercel.app/">
    <img src="https://img.shields.io/badge/Generator%20-%235c86fa.svg?&logoColor=white"/>
  </a>
  <br/>
  <a href="https://github.com/kyechan99/capsule-render/graphs/contributors">
    <img alt="GH Contributors" src="https://img.shields.io/github/contributors/kyechan99/capsule-render" />
  </a>
  <a href="https://codecov.io/gh/kyechan99/capsule-render">
    <img alt="Codecov" src="https://codecov.io/gh/kyechan99/capsule-render/graph/badge.svg" />
  </a>
  <a href="https://github.com/kyechan99/capsule-render/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/kyechan99/capsule-render?color=779669" />
  </a>
  <a href="https://github.com/kyechan99/capsule-render/pulls">
    <img alt="GH pull requests" src="https://img.shields.io/github/issues-pr/kyechan99/capsule-render?color=779669" />
  </a>
</p>

<p align="center"> 
  <a href="README.md">English</a> 
  ·
  <a href="/docs/README_kr.md">한국어</a> 
  ·
  <a href="/docs/README_es.md">Español</a>
  ·
  <a href="/docs/README_fr.md">Français</a>
  ·
  <a href="/docs/README_de.md">Deutsch</a>
  <br/>
  <a href="/docs/README_zh-cn.md">简体中文</a>  
  ·
  <a href="/docs/README_zh-tw.md">繁體中文</a>
  ·
  <a href="/docs/README_zh-hk.md">繁體粤语</a>
  ·
  <a href="/docs/README_pt-br.md">Português (Brasileiro)</a>
  ·
  <a href="/docs/README_jp.md">日本語</a>
  ·
  <a href="/docs/README_ml.md">മലയാളം</a>
  ·
  <a href="/docs/README_ru.md">Русский</a>

</p>
<br/>

> [!TIP]
> Supports simple [Generator](https://capsule-render.vercel.app/).
> However, we recommend reading the README for more detailed adjustments.

> [!IMPORTANT]
> This service is provided on a best-effort basis and may be unstable due to usage limits or traffic spikes.
>
> For reliable use, please [fork](https://github.com/kyechan99/capsule-render/fork) the repository and deploy it to your own [Vercel instance](https://vercel.com/new) (or another hosting platform).

## Navigation

1. [How to Use](#how-to-use)
2. [Types](#types)
3. [Color](#color)
4. [Custom Color List](#custom-color-list)
5. [Theme](#theme)
6. [Section](#section)
7. [Reversal](#reversal)
8. [Height](#height)
9. [Text](#text)
10. [Desc](#desc)
11. [Text Background](#text-background)
12. [Text Animation](#text-animation)
13. [Font Color](#fontcolor)
14. [FontFamily](#fontfamily)
15. [Font Size](#fontsize)
16. [Font Align - X](#fontalign)
17. [Font Align - Y](#fontaligny)
18. [Desc Size](#descsize)
19. [Desc Align - X](#descalign)
20. [Desc Align - Y](#descaligny)
21. [Rotate](#rotate)
22. [Stroke](#stroke)
23. [Stroke-width](#stroke-width)
24. [Demo](#demo)

Any of Idea -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) or [PR](https://github.com/kyechan99/capsule-render/pulls)

# How to Use

```
https://capsule-render.vercel.app/api?
```

Just write query parameter end of this url. Like this

Markdown:

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML:

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## Types

Type data makes to change Background Image.

- [wave](#wave) : default
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

Write `&type= ` on the URL

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Color

Change Background Image!

- `&color=auto` : Proven random color. List are [here](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : Proven random color, but is decided by time.
- `&color=random` : Really random color. I don't know what colors are showing.
- `&color=gradient` : Proven random gradient. List are [here](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : Proven random gradient, but is decided by time.
- `&color=_hexcode` : default(#B897FF)
- `&color=_custom_gradient` : Custom gradient. If write as `&color=0:EEFF00,100:a82da8`, it will be converted to { 0%: 'EEFF00', 100%: 'a82da8' }. (e.g. [DEMO](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

If you use `auto` mode. no need to change `fontColor`.
`auto` also change fontColor auto.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> If you use static color. Do not write '#'

> When use `timeAuto` and `timeGradient`?
>
> Used section `header` and `footer` at the same time.

## Custom Color List

You can **customize the list of colors** that will appear randomly only for `&color=auto` and `&color=gradient`.

Write `&customColorList= ` on the URL.

- If you use `&color=auto`, look at [pallete list](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json).
- If you use `&color=gradient`, look at [gradient list](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json).

Pick the color patterns you want and remember the `idx` value.

For example, if the idx values ​​are 0, 2, and 3, write: `&customColorList=0,2,3`

If you want to make many apperances of `idx=2`, you can write them repeatedly. (e.g. `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## Theme

You can use the specified combination using `theme=`.

Even if `color` and `fontColor` are used, theme has the highest priority.

Check the list of available themes at [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json).

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> I'm currently adding combinations from the [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) little by little.

## Section

Section data makes reverse Background Image.

- `&section=header` : (default)
- `&section=footer`

Write `&section= ` on the URL

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Reversal

Reverse the image left and right. (Color at the same time)

- `&reversal=false` : (default)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Height

Change Image Size. Default value is 120.

Write `&height= ` on the URL

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> Do not write `px`

## Text

Input text over the Image.

Write Something `&text= `.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> You can't use some Special Characters. Like '#', '&', '/' ...
>
> It makes confused API

> It is recommended to use `%20` (blank) and `-nl-` (new line) only

## Desc

Input desc over the Image.

Write Something `&desc= `.

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> You can't use some Special Characters. Like '#', '&', '/' ...
>
> It makes confused API

> It is recommended to use `%20` (blank) and `-nl-` (new line) only

## Text Background

Background of Text.

Write `&textBg=true` to active.

> If you want to increase background-size,
> add `%20` between text values.
> This is because background-size depends on the length of the english-text. (%20 means spacing)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Text Animation

Make the text dynamic.

Write `&animation= `, if you want to use.

- `fadeIn` : fadeIn 1.2s
- `scaleIn` : scaleIn .8s
- `blink` : blink .6s
- `blinking` : blinking 1.6s
- `twinkling` : twinkling 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## FontColor

Change text color. Default value is 000000.

Value should be Hex code with erased '#'

Write `&fontColor= ` behind **Text** query

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## FontFamily

Change text font family.

Write `&fontFamily= ` behind **Text** query.

Use `%20` for spaces in font names.

> `fontFamily` is applied as CSS `font-family`, but actual rendering depends on fonts available in the rendering environment. If a font is unavailable, fallback fonts are used.

```
![header](https://capsule-render.vercel.app/api?text=Hello%20World!&fontFamily=Segoe%20UI)
```

## FontSize

Change text font size. Default value is 70.

Write `&fontSize= ` behind **Text** query

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> Do not write `px`

## FontAlign

Change text horizontal-align (x). write number **between 0~100**

`&fontAlign= ` : Default value is 50. center of image

> In case there are multiple lines in `&text= ` (`-nl-`), providing multiple `&fontAlign= ` will apply different horizontal-align to each line individually.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## FontAlignY

Change text vertical-align (y). write number **between 0~100**

`&fontAlignY= ` : Default value for one line is 50 (center of image). For multiple lines (separated by `-nl-`), default will be calculated to get lines stacked on top of each other and centered.

> In case there are multiple lines in `&text= ` (`-nl-`), providing multiple `&fontAlignY= ` will apply different vertical-align to each line individually.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## DescSize

Change desc font size. Default value is 20.

Write `&descSize= ` behind **desc** query

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> Do not write `px`

## DescAlign

Change desc horizontal-align (x). write number **between 0~100**

`&descAlign= ` : Default value is 50. center of image

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## DescAlignY

Change text vertical-align (y). write number **between 0~100**

`&descAlignY= ` : Default value is 60. center of image

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## Rotate

Usage `&rotate= `, to rotate text.

You can also use negative number.

> Recommend number arrange. ☞ `0 ~ 360`, `0 ~ -360`.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## Stroke

Change text stroke.

Write `&stroke=` behind query

Value should be Hex code with erased '#'

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> Recommended to use with `strokeWidth`.
>
> When used alone, strokeWidth defaults to 1.

## Stroke-width

Change text stroke width.

Write `&strokeWidth=` behind stroke query

Value must be greater than or equal to 0.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> Recommended to use with `stroke`.
>
> When used alone, stroke defaults to 'B897FF'.

# Demo <a id="demo">

## Wave <a id="wave">

[![wave](docs/samples/wave.svg)](https://capsule-render.vercel.app/api?type=wave&color=auto&height=200&text=WAVE)

## Egg <a id="egg">

[![egg](docs/samples/egg.svg)](https://capsule-render.vercel.app/api?type=egg&color=auto&height=210)

## Shark <a id="shark">

[![shark](docs/samples/shark.svg)](https://capsule-render.vercel.app/api?type=shark&color=gradient&height=140)

## Slice <a id="slice">

[![slice](docs/samples/slice.svg)](https://capsule-render.vercel.app/api?type=slice&color=auto&height=200&text=SLICE&fontAlign=70&rotate=13&fontAlignY=25&desc=desc%20function%20is%20also%20rotated.&descAlign=60&descAlignY=44)

## Rect <a id="rect">

[![rect](docs/samples/rect.svg)](https://capsule-render.vercel.app/api?type=rect&color=gradient&text=%20%20RECT%20%20&fontAlign=30&fontSize=30&textBg=true&desc=Use%20%27textBg%27%20to%20highlight%20%27text%27&descAlign=60&descAlignY=50)

## Soft <a id="soft">

[![soft](docs/samples/soft.svg)](https://capsule-render.vercel.app/api?type=soft&color=auto&text=Good%20to%20use%20with%20other%20readme&fontSize=40&animation=twinkling)

## Rounded <a id="rounded">

[![rounded](docs/samples/rounded.svg)](https://capsule-render.vercel.app/api?type=rounded&color=timeAuto&text=Rounded%20with%20stroke&fontAlignY=50&fontSize=40&height=200&stroke=000000&strokeWidth=2)

## Cylinder <a id="cylinder">

[![cylinder](docs/samples/cylinder.svg)](https://capsule-render.vercel.app/api?type=cylinder&color=auto&text=Cylinder&fontAlignY=45&fontSize=40&height=150&animation=blinking&desc=desc%20is%20also%20animated&descAlignY=70)

## Waving <a id="waving">

[![waving](docs/samples/waving.svg)](https://capsule-render.vercel.app/api?type=waving&height=200&text=Waving!&fontAlign=80&fontAlignY=40&color=gradient)

## Transparent <a id="transparent">

[![transparent](docs/samples/transparent.svg)](https://capsule-render.vercel.app/api?type=transparent&fontColor=703ee5&text=Transparent&height=150&fontSize=60&desc=Only%20Use%20Text&descAlignY=75&descAlign=60)

## Venom <a id="venom">

[![venom](docs/samples/venom.svg)](https://capsule-render.vercel.app/api?type=venom&height=200&text=I%20am%20Venom.&fontSize=70&color=0:8871e5,100:b678c4&stroke=b678c4)

## Speech <a id="speech">

[![speech](docs/samples/speech.svg)](https://capsule-render.vercel.app/api?type=speech&height=200&fontSize=45&color=gradient&text=speech-nl-bubble&animation=blinking&fontAlign=30,60&fontAlignY=35,55)

## Blur <a id="blur">

[![blur](docs/samples/blur.svg)](https://capsule-render.vercel.app/api?type=blur&height=300&color=gradient&text=Blur&strokeWidth=2&section=footer&reversal=true&fontAlign=50&stroke=E0E0E0&fontSize=55&textBg=false)

<hr/>
