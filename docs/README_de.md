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

> Ich suche nach weiteren Übersetzungen für dieses README.

> Unterstützt einen einfachen [Generator](https://capsule-render.vercel.app/).
> Wir empfehlen jedoch, die README-Datei zu lesen, um genauere Einstellungen vorzunehmen.

## Navigation

1. [Anleitung](#how-to-use)
2. [Arten](#arten)
3. [Farben](#color)
4. [Benutzerdefinierte Farbliste](#benutzerdefinierte-farbliste)
5. [Abschnitte](#abschnitt)
6. [Reversal](#reversal)
7. [Höhe](#höhe)
8. [Text](#text)
9. [Beschreibung](#beschreibung)
10. [Text Hintergrund](#text-hintergrund)
11. [Text Animation](#text-animation)
12. [Textfarbe](#fontcolor)
13. [Textgröße](#fontsize)
14. [Textausrichtung - X](#fontalign)
15. [Textausrichtung - Y](#fontaligny)
16. [Größe der Beschreibung](#descsize)
17. [Beschreibung Ausrichtung - X](#descalign)
18. [Beschreibung Ausrichtung - Y](#descaligny)
19. [Drehen](#rotate)
20. [Demo](#demo)

Ideen -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) oder [PR](https://github.com/kyechan99/capsule-render/pulls)

# How to Use

```
https://capsule-render.vercel.app/api?
```

Schreibt einfach die Parameter der Query an das Ende der Url, wie hier:

Markdown:

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML:

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## Arten

Diesen Arten können angegeben werden, um den Hintergrund zu ändern:

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

Schreibe `&type= ` in die URL:

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Farben

Ändert die Hintergrundfarbe:

- `&color=auto` : Zufällige Farbe. Die Liste der Farben findet man [hier](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : Zufällig Farbe, die von der Tageszeit bestimmt wird.
- `&color=random` : Komplett zufällige Farben, ich weiss nicht, welche Kombination dann gezeigt werden.
- `&color=gradient` : Zufälliger Farbübergang. Liste ist [hier](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : Zufällig Farbübergang, der von der Tageszeit bestimmt wird.
- `&color=_hexcode` : Standardfarbe(#B897FF)
- `&color=_custom_gradient` : Benutzerdefinierter Farbübergang. Wenn du `&color=0:EEFF00,100:a82da8` schreibst, wird es zu { 0%: 'EEFF00', 100%: 'a82da8' } konvertiert. (z.B. [DEMO](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

Wenn `auto` mode genutzt wird, muss die `fontColor` (Textfarbe) nicht geändert werden, sie wird automatisch angepasst.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> Schreib nicht '#', wenn du statische Farben benutzt.

> Wenn du `timeAuto` und `timeGradient` benutzt?
>
> Hier wurde der `header` und `footer` Abschnitt gleichzeitig benutzt.

## Benutzerdefinierte Farbliste

Du kannst die **Liste der Farben anpassen**, die nur bei `&color=auto` und `&color=gradient` zufällig erscheinen wird.

Schreib `&customColorList= ` in die URL.

- Wenn du `&color=auto` benutzt, schau dir [pallete list](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json) an.
- Wenn du `&color=gradient` benutzt, schau dir [gradient list](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json) an.

Such dir ein Farbmuster aus und merke dir den `idx` Wert.

Wenn die idx Werte zum Beispiel 0, 2 und 3 sind, schreib: `&customColorList=0,2,3`

Wenn `idx=2` oft vorkommen soll, kannst du den Wert mehrfach reinschreiben. (z.B. `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## Theme

Du kannst die angegebene Kombination mit `theme=` benutzen.

Auch wenn `color` und `fontColor` benutzt werden, hat theme die höchste Priorität.

Du kannst dir eine Liste erhältlicher themes anschauen: [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json).

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> Ich füge aktuell Kombination von [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) nach und nach hinzu.

## Abschnitt

Die Abschnittsdaten ergeben ein umgekehrtes Hintergrundbild.

- `&section=header` : (Standard)
- `&section=footer`

Schreib `&section= ` in die URL

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Reversal

Dreht das Bild nach links und rechts um (Auch gleichzeitig die Farben).

- `&reversal=false` : (default)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Höhe

Ändert die Größe des Bildes. Der Standardwert ist 120.

Schreib `&height= ` in die URL.

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> Schreib nicht `px`

## Text

Fügt Text auf dem Bild ein

Schreibe etwas mit `&text= `.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> Manche Sonderzeichen wie '#', '&', '/'... können nicht benutzt werden.
>
> Es verwirrt sonst die API.

> Es wird empfohlen, nur `%20` (Leerzeichen) und `-nl-` (Zeilenumbruch) zu benutzen.

## Beschreibung

Fügt eine Beschreibung für das Bild ein.

Schreib etwas mit `&desc= `.

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> Manche Sonderzeichen wie '#', '&', '/'... können nicht benutzt werden.
>
> Es verwirrt sonst die API.

> Es wird empfohlen, nur `%20` (Leerzeichen) zu benutzen.

## Text Hintergrund

Bestimmt den Hintergrund des Textes

Scchreibe zum Aktivieren `&textBg=true`.

> Wenn du die Größe des Hintergrunds ändern willst,
> füge `%20` im Text hinzu.
> Das liegt daran, dass die Hintergrundgröße von der Länge des englischen Textes abhängt. (%20 bedeutet Abstand)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Text Animation

Macht den Text dynamisch.

Schreibe `&animation= `, wenn du es benutzen willst.

- `fadeIn` : fadeIn 1.2s
- `scaleIn` : scaleIn .8s
- `blink` : blink .6s
- `blinking` : blinking 1.6s
- `twinkling` : twinkling 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## FontColor

Ändert die Textfarbe. Der Standardwert ist 000000.

Der Wert sollte ein Hexcode ohne '#' sein.
Schreib `&fontColor= ` hinter den **Text** Parameter

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## FontSize

Ändert die Textgröße. Der Standardwert ist 70.

Schreibe `&fontSize= ` hinter den **Text** Parameter

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> Schreib nicht `px`

## FontAlign

Ändert die horizontale Ausrichtung (x) vom Text. Benutze eine Zahl **zwischen 0~100**

`&fontAlign= ` : Standardwert ist 50, die Mitte vom Bild.

> Falls es mehrere Zeilen in `&text= ` (`-nl-`) gibt, wird durch die Angabe mehrerer `&fontAlign= ` jede Zeile einzeln horizontal ausgerichtet.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## FontAlignY

Ändert die vertikale Ausrichtung des Textes (y). Benutze eine Zahl **zwischen 0~100**

`&fontAlignY= ` : Standardwert für eine Zeile ist 50 (Mitte des Bildes). Für mehrere Zeilen (getrennt durch `-nl-`) wird der Standardwert so berechnet, dass die Zeilen übereinander gestapelt und zentriert werden.

> Falls mehrere Zeilen in `&text=` (`-nl-`) vorhanden sind, wird bei Angabe mehrerer `&fontAlignY=` jede Zeile einzeln vertikal ausgerichtet.
> Falls mehrere Zeilen in `&text=` (`-nl-`) vorhanden sind, wird bei Angabe mehrerer `&fontAlignY=` jede Zeile einzeln vertikal ausgerichtet.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## DescSize

Ändert die Schriftgröße der Beschreibung. Der Standardwert ist 20.

Schreib `&descSize= ` hinter den **desc** Parameter

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> Schreib nicht `px`

## DescAlign

Ändert die horizontale Ausrichtung von der Beschreibung. Benutze eine Nummer **zwischen 0~100**.

`&descAlign= ` : Der Standardwert ist 50, die Mitte des Bildes.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## DescAlignY

Ändert die vertikale Ausrichtung der Beschreibung. Benutze eine Nummer **zwischen 0~100**.

`&descAlignY= ` : Der Standardwert ist 60, die Mitte des Bildes.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## Rotate

Benutze `&rotate= `, um einen Text zu drehen.

Du kannst auch negative Zahlen benutzen.

> Empfohlener Zahlenbereich ☞ `0 ~ 360`, `0 ~ -360`.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## Stroke

Ändert die Schriftart.

Schreib `&stroke=` hinter die Anfrage

Der Wert sollte ein Hexcode ohne '#' sein.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> Es wird empfohlen es mit `strokeWidth` zusammmen zu benutzen.
>
> Wenn es alleine benutzt wird, setzt sich strokeWidth auf 1.

## Stroke-width

Ändert die Strichstärke des Textes.

Schreib `&strokeWidth=` hinter den stroke Parameter

Wert muss größer oder gleich 0 sein.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> Es wird empfohlen es mit `stroke` zusammen zu benutzen.
>
> Wenn es alleine benutzt wird, setzt sich stroke auf 'B897FF'.

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
