 
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
  <a href="readme.md">English</a> 
  ·
  <a href="/docs/readme_kr.md">한국어</a> 
</p>
<br/>

> 이 README를 번역해 주실 분을 찾고 있습니다.

> 간단한 [Generator](https://capsule-render.vercel.app/)를 지원합니다.
> 다만 더욱 섬세한 디테일을 사용하고자 한다면 README를 꼭 읽어 보시길 추천드립니다.

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

기능 및 아이디어 제보 -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) or [PR](https://github.com/kyechan99/capsule-render/pulls)

# 사용법

아래 url 에서 query parameter를 입력하여 사용합니다.

```
https://capsule-render.vercel.app/api?
```


Markdown:

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML:

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## Types

Type 데이터는 배경 이미지를 변경합니다.

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

`&type= ` 에 데이터를 작성하여 사용합니다.

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Color

배경 이미지의 색상을 변경하세요!

- `&color=auto` : 검증된 랜덤한 컬러를 제공합니다. [검증된 목록](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : 검증된 랜덤한 컬러를 제공하지만 시간(분)에 따라 결정됩니다.
- `&color=random` : 정말 랜덤한 컬러를 제공하지만 어떤 컬러를 보여줄지는 아무도 모릅니다.
- `&color=gradient` : 검증된 랜덤 gradient를 제공합니다. [검증된 목록](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : 검증된 랜덤 gradient를 제공하지만 시간(분)에 따라 결정됩니다.
- `&color=_hexcode` : 커스텀 hexcode를 입력하여 사용합니다. (기본값: B897FF)
- `&color=_custom_gradient` : 커스텀 gradient를 입력하여 사용합니다. 만약 `&color=0:EEFF00,100:a82da8` 과 같이 작성한다면 { 0%: 'EEFF00', 100%: 'a82da8' } 으로 사용됩니다. (예시: [DEMO](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

만약 `auto` 모드를 사용한다면  `fontColor`를 사용할 필요는 없습니다.
`auto` 모드는 fontColor도 자동으로 적용됩니다.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> 만약 정적 컬러(hexcode)를 사용한다면 '#'를 사용하지 마세요.

> `timeAuto` 와 `timeGradient` 는 언제 사용하나요?
>
> 여러 이미지나 섹션 `header` 와 `footer` 등 동시에 같은 색상으로 사용하고자 할때 사용합니다.

## Custom Color List

무작위로 표시되는 색상 목록인 `&color=auto` 및 `&color=gradient`에 대해서, **특정 목록을 사용자 정의**할 수 있습니다.

먼저 `&customColorList= ` 를 작성합니다.

- `&color=auto` 를 사용한다면 [pallete list](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json) 를 확인하세요.
- `&color=gradient` 를 사용한다면 [gradient list](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json) 를 확인하세요.

원하는 패턴을 고르고 `idx` 값을 기억합니다.

예를 들어, 0, 2, 3 인 idx를 사용하고자 한다면 `&customColorList=0,2,3`  과 같이 사용합니다.

만약 `idx=2` 인 값을 조금 더 자주 나타나게 하고자 한다면 반복해서 작성하는 방법도 있습니다. (예: `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## Theme

`theme=` 를 사용해 지정된 조합을 사용할 수 있습니다.

`color` 와 `fontColor` 를 사용하더라도 theme의 우선순위가 가장 높습니다.

사용 가능한 테마 목록을 확인하세요. [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json).

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> 현재 [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md)에서 조합을 조금씩 추가하고 있습니다. 기여해주시면 감사드리겠습니다.

## Section

`section` 데이터는 배경 이미지를 반전시킵니다. 

- `&section=header` : (default)
- `&section=footer`
 

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Reversal

좌우를 반전시킵니다. (gradient도 동시에 반전시킵니다)

- `&reversal=false` : (default)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Height

높이를 변겹합니다. 기본값은 120 입니다.

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> `px` 단위이나 이를 포함해 작성하지 마세요.

## Text

이미지에 글자를 적습니다.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> 특수 문자를 직접 사용할 수는 없는니다. '#', '&', '/' ...
>
> 이는 API를 혼란스럽게 만듭니다.

> 공백을 사용하려면 `%20`을, 개행을 사용하려면 `-nl-` 을 작성하세요.

## Desc

이미지에 부가 설명을 작성할 수 있습니다.

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> 특수 문자를 직접 사용할 수는 없는니다. '#', '&', '/' ...
>
> 이는 API를 혼란스럽게 만듭니다.

> 공백을 사용하려면 `%20`을 작성하세요.

## Text Background

Text 에 배경을 입힙니다.

`&textBg=true` 을 작성해 활성화 시킬 수 있습니다.

> 만약 배경 크기를 증가시키려면 `%20`을 text 값에 추가시키세요.
> 배경 크기는 텍스트의 길이에 따라 달라지기 때문입니다. (%20은 간격을 의미함)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Text Animation

text 에 애니메이션을 추가합니다.

- `fadeIn` : fadeIn 1.2s
- `scaleIn` : scaleIn .8s
- `blink` : blink .6s
- `blinking` : blinking 1.6s
- `twinkling` : twinkling 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## FontColor

text 의 색상을 변경합니다. 기본값 000000.

값은 '#'이 지워진 Hexcode여야 합니다.

**Text** 쿼리를 사용후 `&fontColor= ` 를 사용하세요.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## FontSize

text 의 크기를 변경합니다. 기본값 70.

**Text** 쿼리를 사용후 `&fontSize= ` 를 사용하세요.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> `px` 단위이나 적으실 필요는 없습니다.

## FontAlign

text의 가로 정렬(x)을 변경합니다. **0~100 사이** 

`&fontAlign= ` : 기본값은 50입니다. 이미지 중앙을 의미합니다.

> `&text= ` 에 (`-nl-`) 과 같이 여러 줄이 있는 경우 여러 `&fontAlign= `을 제공하면 각 줄에 개별적으로 다른 가로 정렬이 적용됩니다.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## FontAlignY

text의 세로 정렬(x)을 변경합니다. **0~100 사이** 

`&fontAlignY= ` : 기본값은 50입니다. 이미지 중앙을 의미합니다. `-nl-`을 사용하면서 여러 줄이 될 경우 기본값은 줄을 서로 겹쳐 쌓이고 중앙에 배치하도록 계산됩니다.

> `&text= ` 에 (`-nl-`) 과 같이 여러 줄이 있는 경우 여러 `&fontAlign= `을 제공하면 각 줄에 개별적으로 다른 세로 정렬이 적용됩니다.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## DescSize

부가 설명 글꼴 크기를 변경합니다. 기본값은 20입니다. 

**desc** 쿼리를 사용후 `&descSize= ` 를 사용하세요.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> `px` 단위이나 적으실 필요는 없습니다.

## DescAlign

desc의 가로 정렬(x)을 변경합니다. **0~100 사이**  

`&descAlign= ` : 기본값은 50입니다. 이미지 중앙을 의미합니다.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## DescAlignY

desc의 세로 정렬(x)을 변경합니다. **0~100 사이** 

`&descAlignY= ` : 기본값은 50입니다. 이미지 중앙을 의미합니다.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## Rotate

`&rotate= ` 는 문자들을 회전시킵니다.

음수를 사용할 수도 있습니다.

> ☞ `0 ~ 360`, `0 ~ -360`.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## Stroke

text의 stroke 도 변경할 수 있습니다.

Hexcode에서 '#' 르 지워 사용합니다.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> `strokeWidth` 를 같이 사용하는 것을 추천드립니다.
>
> 만약 Stroke 만 사용한다면 `strokeWidth`의 기본값은 1 이 됩니다.

## Stroke-width

stroke의 굵기를 변경합니다.

`stroke`를 사용후 `&strokeWidth=` 를 사용해주세요.

값은 0 이상이어야 합니다.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> `stroke`와 함께 사용하는 것을 추천드립니다.
>
> `strokeWidth` 만 사용한다면 `storke`의 기본값은 'B897FF' 이 됩니다.

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
 