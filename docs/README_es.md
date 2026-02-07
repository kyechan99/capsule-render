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
  ·
  <a href="/docs/README_es.md">Español</a>
  ·
  <a href="/docs/README_fr.md">Français</a>
  ·
  <a href="/docs/README_de.md">Deutsch</a>
  ·
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
</p>
<br/>

> Buscando alguien para traducir este README.

> Compatible con el simple [Generator](https://capsule-render.vercel.app/).
> Sin embargo, recomiendo leer el README para ajustes más detallados.

## Navegación

1. [Cómo usarlo](#cómo-usarlo)
2. [Tipos](#tipos)
3. [Colores](#colores)
4. [Lista de colores personalizada](#lista-de-colores-personalizada)
5. [Sección](#sección)
6. [Tema](#tema)
7. [Reversión](#reversión)
8. [Altura](#altura)
9. [Texto](#texto)
10. [Descripción](#descripción)
11. [Fondo del texto](#fondo-del-texto)
12. [Animación del texto](#animación-del-texto)
13. [Color de fuente](#color-de-fuente)
14. [Tamaño de fuente](#tamaño-de-fuente)
15. [Alineación horizontal del texto](#alineación-horizontal-del-texto)
16. [Alineación vertical del texto](#alineación-vertical-del-texto)
17. [Tamaño de la descripción](#tamaño-de-la-descripción)
18. [Alineación horizontal de la descripción](#alineación-horizontal-de-la-descripción)
19. [Alineación vertical de la descripción](#alineación-vertical-de-la-descripción)
20. [Rotación](#rotación)
21. [Contorno del texto](#contorno-del-texto)
22. [Ancho del contorno del texto](#ancho-del-contorno-del-texto)
23. [Demo](#demo)

Cualquier idea -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) or [PR](https://github.com/kyechan99/capsule-render/pulls)

# Cómo usarlo

```
https://capsule-render.vercel.app/api?
```

Solo escribe el parámetro de consulta al final de esta URL. Como esto:

Markdown:

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML:

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## Tipos

Tipos de datos que hacen que cambie la imagen de fondo.

- [wave](#wave) : por defecto
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

Escribe `&type= ` en la URL

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Colores

Cambia la imagen de fondo!

- `&color=auto` : Color aleatorio. La lista de colores está [aquí](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : Color aleatorio, pero cambia con el tiempo.
- `&color=random` : Color muy aleatorio. No se sabe que colores mostrará.
- `&color=gradient` : Gradiente aleatorio. La lista de gradientes está [aquí](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : Gradiente aleatorio, pero cambia con el tiempo.
- `&color=_hexcode` : por defecto (#B897FF)
- `&color=_custom_gradient` : Gradiente personalizado. Si se escribe como `&color=0:EEFF00,100:a82da8`, se convertirá en { 0%: 'EEFF00', 100%: 'a82da8' }. (e.g. [DEMO](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

Si se utiliza el modo `auto`. no es necesario cambiar `fontColor`.
`auto` también cambia `fontColor`.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> Si se usa color estático. No se debe escribir '#'

> ¿Cuando se utiliza `timeAuto` y `timeGradient`?
>
> Se utiliza la sección `header` y `footer` al mismo tiempo.

## Lista de colores personalizada

Puedes **personalizar la lista de colores** que aparecerá aleatoriamente solo para `&color=auto` y `&color=gradient`.

Escribe `&customColorList= ` en la URL.

- Si se utiliza `&color=auto`, ver [lista de paletas](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json).
- Si se utiliza `&color=gradient`, ver [lista de gradientes](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json).

Elige los patrones de color que deseas y recuerda el valor `idx`.

Por ejemplo, si los valores de `idx` son 0, 2 y 3, escribe: `&customColorList=0,2,3`

Si deseas que aparezcan muchas veces `idx=2`, puedes escribirlo repetidamente. (e.g. `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## Tema

Puedes usar la combinación especificada usando `theme=`.

Incluso si se utiliza `color` y `fontColor`, el tema tiene la mayor prioridad.

Verifica la lista de temas disponibles en [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json).

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> Actualmente estoy agregando combinaciones de [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) poco a poco.

## Sección

La sección de datos crea una imagen de fondo invertida.

- `&section=header` : (por defecto)
- `&section=footer`

Escribe `&section= ` en la URL

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Reversión

Invierte la imagen de izquierda a derecha. (Color al mismo tiempo)

- `&reversal=false` : (por defecto)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Altura

Cambia el tamaño de la imagen. El valor predeterminado es 120.

Escribe `&height= ` en la URL

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> No escribas `px`

## Texto

Ingresa texto sobre la imagen.

Escribe algo `&text= `.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> No puedes usar algunos caracteres especiales. Como '#', '&', '/' ...
>
> Esto confunde a la API

> Se recomienda usar `%20` (espacio) y `-nl-` (nueva linea) solamente

## Descripción

Ingresa texto debajo de la imagen.

Escribe algo `&desc= `.

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> No puedes usar algunos caracteres especiales. Como '#', '&', '/' ...
>
> Esto confunde a la API

> Se recomienda usar `%20` (espacio) solamente

## Fondo del texto

Fondo del texto.

Escribe `&textBg=true` para activarlo.

> Si deseas aumentar el tamaño del fondo,
> agrega `%20` entre los valores del texto.
> Esto es porque el tamaño del fondo depende de la longitud del texto en inglés. (%20 significa el espacio)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Animación del texto

Hace que el texto sea animado.

Escribe `&animation= ` si deseas usarlo.

- `fadeIn` : fadeIn 1.2s
- `scaleIn` : scaleIn .8s
- `blink` : blink .6s
- `blinking` : blinking 1.6s
- `twinkling` : twinkling 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## Color de fuente

Cambia el color de la fuente. El valor predeterminado es 000000.

El valor debe ser un código hexadecimal sin el simbolo '#'

Escribe `&fontColor= ` detrás de la consulta **Text**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## Tamaño de fuente

Cambia el tamaño de la fuente. El valor predeterminado es 70.

Escribe `&fontSize= ` detrás de la consulta **Text**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> No escribas `px`

## Alineación horizontal del texto

Cambia el alineamiento horizontal (x). Escribe un número **entre 0~100**

`&fontAlign= ` : El valor por defecto es 50. centro de la imagen

> En caso de que haya varias líneas en `&text= ` (`-nl-`), proporcionar múltiples `&fontAlign= ` aplicará diferentes alineamientos horizontales a cada línea individualmente.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## Alineación vertical del texto

Cambia el alineamiento vertical (y). Escribe un número **entre 0~100**

`&fontAlignY= ` : El valor por defecto es 50 (centro de la imagen). Para múltiples líneas (separadas por `-nl-`), el valor por defecto se calculará para que las líneas se superpongan una sobre la otra y estén centradas.

> En caso de que hayan multiples lineas en `&text= ` (`-nl-`), proporcionar multiples `&fontAlignY= ` aplicará diferentes alineamientos verticales a cada línea individualmente.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## Tamaño de la descripción

Cambia el tamaño de la fuente de la descripción. El valor predeterminado es 20.

Escribe `&descSize= ` detrás de la consulta **desc**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> No escribas `px`

## Alineación horizontal de la descripción

Cambia el alineamiento horizontal (x). Escribe un número **entre 0~100**

`&descAlign= ` : El valor por defecto es 50. centro de la imagen

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## Alineación vertical de la descripción

Cambia el alineamiento vertical (y). Escribe un número **entre 0~100**

`&descAlignY= ` : El valor por defecto es 60. centro de la imagen

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## Rotación

Utiliza `&rotate= ` para rotar el texto.

También puedes usar números negativos.

> Se recomienda usar números entre `0 ~ 360`, `0 ~ -360`.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## Contorno del texto

Cambia el Contorno del texto. (stroke)

Escribe `&stroke=` detrás de la consulta

El valor debe ser un código hexadecimal sin el simbolo '#'

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> Se recomienda utilizarlo con `strokeWidth`.
>
> Cuando se utiliza solo, `strokeWidth` por defecto es 1.

## Ancho del contorno del texto

Cambia el Ancho del contorno del texto. (stroke-width)

Escribe `&strokeWidth=` detrás de la consulta `stroke`

El valor debe ser mayor o igual a 0.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> Se recomienda utilizarlo con `stroke`.
>
> Cuando se utiliza solo, el `stroke` por defecto es 'B897FF'.

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

## Speech <a id="speech">

![speech](https://capsule-render.vercel.app/api?type=speech&height=200&fontSize=45&color=gradient&text=speech-nl-bubble&animation=blinking&fontAlign=30,60&fontAlignY=35,55)

## Blur <a id="blur">

![blur](https://capsule-render.vercel.app/api?type=blur&height=300&color=gradient&text=Blur&strokeWidth=2&section=footer&reversal=true&fontAlign=50&stroke=E0E0E0&fontSize=55&textBg=false)

<hr/>
