 
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
  <a href="README.md">English</a> 
  ·
  <a href="/docs/README_kr.md">한국어</a> 
</p>
<br/>

> Looking for someone to translate this README.

> Supports simple [Generator](https://capsule-render.vercel.app/).
> However, we recommend reading the README for more detailed adjustments.

## Navigation

1. [How to Use](#how-to-use)
2. [Types](#types)
3. [Color](#color)
4. [Custom Color List](#custom-color-list)
5. [Section](#section)
6. [Reversal](#reversal)
7. [Height](#height)
8. [Text](#text)
9. [Desc](#desc)
10. [Text Background](#text-background)
11. [Text Animation](#text-animation)
12. [Font Color](#fontcolor)
13. [Font Size](#fontsize)
14. [Font Align - X](#fontalign)
15. [Font Align - Y](#fontaligny)
16. [Desc Size](#descsize)
17. [Desc Align - X](#descalign)
18. [Desc Align - Y](#descaligny)
19. [Rotate](#rotate)
20. [Demo](#demo)

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

> It is recommended to use `%20` (blank) only

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

<hr/>
