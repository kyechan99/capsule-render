![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=capsule%20render&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Decorate%20GitHub%20Profile%20or%20any%20Repo%20like%20me!&descAlignY=51&descAlign=62)
<p align='center'> Decorate GitHub Profile or any Repo like me! </p>
<p align='center'>
  <a href="https://github.com/kyechan99/capsule-render/labels/Idea">
    <img src="https://img.shields.io/badge/IDEA%20ISSUE%20-%23F7DF1E.svg?&style=for-the-badge&&logoColor=white"/>
  </a>
  <a href="#demo">
    <img src="https://img.shields.io/badge/DEMO%20-%234FC08D.svg?&style=for-the-badge&&logoColor=white"/>
  </a>
</p>

## Navigation
1. [How to Use](#how-to-use)
2. [Types](#types)
3. [Color](#color)
4. [Section](#section)
5. [Reversal](#reversal)
6. [Height](#height)
7. [Text](#text)
8. [Desc](#desc)
9. [Text Background](#text-background)
10. [Text Animation](#text-animation)
11. [Font Color](#fontcolor)
12. [Font Size](#fontsize)
13. [Font Align - X](#fontalign)
13. [Font Align - Y](#fontaligny)
14. [Desc Size](#descsize)
15. [Desc Align - X](#descalign)
16. [Desc Align - Y](#descaligny)
17. [Rotate](#rotate)
18. [Demo](#demo)

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

If you use `auto` mode. no need to change `fontColor`. 
`auto` also change fontColor auto.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```
> If you use static color. Do not write '#'

> When use `timeAuto` and `timeGradient`?
>
> Used section `header` and `footer` at the same time. 

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
Change Image Size. Default value is 200.

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

> It is recommended to use `%20` (blank) only

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
add `%20` between text values.
This is because background-size depends on the length of the english-text. (%20 means spacing)

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
Change text color. Default value is 000000
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

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## FontAlignY
Change text vertical-align (y). write number **between 0~100**

`&fontAlignY= ` : Default value is 50. center of image

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


# Demo <a id="demo">

## Wave <a id="wave">
![wave](https://capsule-render.vercel.app/api?type=wave&color=auto&height=200&text=WAVE)

## Egg <a id="egg">
![egg](https://capsule-render.vercel.app/api?type=egg&color=auto&height=210)

## Shark <a id="shark">
![shark](https://capsule-render.vercel.app/api?type=shark&color=gradient&height=140)

## Slice <a id="slice">
![slice](https://capsule-render.vercel.app/api?type=slice&color=auto&height=200&text=SLICE&fontAlign=70&rotate=13&fontAlignY=25&desc=desc%20function%20is%20also%20rotated.&descAlign=70.&descAlignY=44)
  
## Rect <a id="rect">
![rect](https://capsule-render.vercel.app/api?type=rect&color=gradient&text=%20%20RECT%20%20&fontAlign=30&fontSize=30&textBg=true&desc=Use%20%27textBg%27%20to%20highlight%20%27text%27&descAlign=60&descAlignY=50)

## Soft <a id="soft">
![soft](https://capsule-render.vercel.app/api?type=soft&color=auto&text=Good%20to%20use%20with%20other%20readme&fontSize=40&animation=twinkling)

## Rounded <a id="rounded">
![rounded](https://capsule-render.vercel.app/api?type=rounded&color=timeAuto&text=Rounded&fontAlignY=50&fontSize=40&height=200)

## Cylinder <a id="cylinder">
![cylinder](https://capsule-render.vercel.app/api?type=cylinder&color=auto&text=Cylinder&fontAlignY=45&fontSize=40&height=150&animation=blinking&desc=desc%20is%20also%20animated&descAlignY=70)

## Waving <a id="waving">
![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Waving!&fontAlign=80&fontAlignY=40&color=gradient)

## Transparent <a id="transparent">
![transparent](https://capsule-render.vercel.app/api?type=transparent&fontColor=703ee5&text=Transparent&height=150&fontSize=60&desc=Only%20Use%20Text&descAlignY=75&descAlign=60)



<hr/>

# Things that helped contribute

- SVG Path Easy Maker [Codepen](https://codepen.io/kyechan99/pen/yLeQVBa)
- SVG Path draw [mavo.io](https://mavo.io/demos/svgpath/)


![footer](https://capsule-render.vercel.app/api?type=wave&color=auto&height=200&section=footer&text=Now%20Use%20me!&fontSize=90)
