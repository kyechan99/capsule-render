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

> このREADMEの翻訳にご協力いただける方を募集しております。

> 簡易的な [Generator](https://capsule-render.vercel.app/)もご利用いただけますが、より細かなカスタマイズをご希望の場合は、ぜひREADMEをご一読いただくことをおすすめいたします。



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

機能やアイデアのご提案 -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) or [PR](https://github.com/kyechan99/capsule-render/pulls)

# 使用方法

以下のURLに、query parameterを入力してご利用ください。

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

Typeデータによって背景画像が変更されます。

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

`&type= ` にデータを入力して使用します。

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Color

背景画像の色を変更してください！

- `&color=auto` : 検証済みのランダムなカラーを提供します。 [検証済みリスト](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : 検証済みのランダムなカラーを提供しますが、時間（分）によって決まります。
- `&color=random` : 完全にランダムな色が生成されるため、表示される色は予測できません。
- `&color=gradient` : 検証済みのランダムなグラデーションを提供します。 [検証済みリスト](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : 検証済みのランダムなグラデーションを提供しますが、時間（分）によって決まります。
- `&color=_hexcode` : カスタムの16進数カラーコード（hexcode）を入力して使用します。（初期設定値：B897FF）
- `&color=_custom_gradient` : カスタムのグラデーションを入力して使用します。たとえば `&color=0:EEFF00,100:a82da8` と入力すると、{ 0%: 'EEFF00', 100%: 'a82da8' } のように適用されます。 (例: [DEMO](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

auto モードを使用する場合は fontColor を指定する必要はありません。
autoモードでは、フォントカラーも自動的に設定されます。

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> 固定のカラー（hexcode）を使用する場合は、『#』を付けないでください。

> `timeAuto` および `timeGradient` 、どのような場面での使用が想定されますか？
>
> 複数の画像やセクション（例：`header` や `footer`）などで、同一の色を同時に使用したい場合に利用します。

## Custom Color List

`&color=auto` および `&color=gradient` はランダムに色を表示しますが、**表示される色の一覧をユーザー自身でカスタマイズして指定**することができます。

まず `&customColorList= ` を記述します。

- `&color=auto` を使用する際は [pallete list](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json) をご参照ください。
- `&color=gradient` を使用する際は [gradient list](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json) をご参照ください。

希望するパターンを選択し、その `idx` の値を控えておいてください。

例えば、`idx` が 0、2、3 のパターンを使用したい場合は、`&customColorList=0,2,3` のように指定します。

また、`idx=2` の値をより頻繁に表示させたい場合は、その値を繰り返し記述する方法もあります。（例：`&customColorList=0,2,2,2,2,3`）

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## Theme

`theme=` を使用して、あらかじめ定められた組み合わせを指定することができます。

`color` や `fontColor` を指定した場合でも、themeの優先順位が最も高くなります。

利用可能なテーマの一覧は、こちらの[pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json)をご確認ください。

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> 現在、 [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md)にて、テーマの組み合わせを少しずつ追加しています。ご協力いただけますと幸いです。

## Section

`section` データは背景画像を反転させます。

- `&section=header` : (default)
- `&section=footer`

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Reversal

左右を反転させます。（グラデーションも同時に反転します）

- `&reversal=false` : (default)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Height

高さを変更します。初期値は120です。

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> `px` 単位ですが、単位の記述は不要です。

## Text

画像に文字を記入します。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> 特殊文字（'#', '&', '/' など）は直接使用できません。
>
> これはAPIの動作を混乱させる原因となります。

> 空白を入力する場合は `%20`、改行を入力する場合は `-nl-` をご利用ください。

## Desc

画像に補足説明を記入できます。

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> 特殊文字（'#', '&', '/' など）は直接使用できません。
>
> これはAPIの動作を混乱させる原因となります。

> 空白を入力する場合は `%20` をご使用ください。

## Text Background

テキストに背景を付けます。

`&textBg=true` を指定すると有効化できます。

> 背景の大きさを大きくしたい場合は、text の値に `%20`（スペース）を追加してください。
> 背景の大きさはテキストの長さに応じて変わります。

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Text Animation

テキストにアニメーションを追加します。

- `fadeIn` : fadeIn 1.2s
- `scaleIn` : scaleIn .8s
- `blink` : blink .6s
- `blinking` : blinking 1.6s
- `twinkling` : twinkling 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## FontColor

テキストの色を変更します。初期値は000000です。

値は「#」を除いた16進数のカラーコード(Hxcodee)で指定してください。

**Text** クエリを使用した後に、`&fontColor=` を指定してください。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## FontSize

テキストのサイズを変更します。初期値は70です。

**Text** クエリを使用した後に、 `&fontSize= ` を指定してください。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> `px` 単位ですが、単位の記述は不要です。

## FontAlign

テキストの横方向の配置（x座標）を変更します。 **0~100の範囲で指定可能です。**

`&fontAlign= ` : 初期値は50で、画像の中央を意味します。

> `&text=` に複数行（例：`-nl-`）がある場合、複数の `&fontAlign=` を指定すると、各行に個別の横位置が適用されます。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## FontAlignY

テキストの縦方向の配置（y座標）を変更します。**0〜100の範囲で指定可能です。**

`&fontAlignY= ` : 初期値は50で、画像の中央を意味します。複数行を`-nl-`で指定した場合、初期設定では行が重なるように積み重ねられ、中央に配置されるよう計算されます。

> `&text=` に複数行（例：`-nl-`）がある場合、複数の `&fontAlignY=` を指定すると、各行に個別の縦位置が適用されます。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## DescSize

descのフォントサイズを変更します。初期値は20です。

**desc**  クエリを使用した後に、 `&descSize= ` を指定してください。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> `px` 単位ですが、単位の記述は不要です。

## DescAlign

descの横方向の配置（x座標）を変更します。**0〜100の範囲で指定可能です。**
**
`&descAlign= ` : 初期値は50で、画像の中央を意味します。

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## DescAlignY

descの縦方向の配置（y座標）を変更します。**0〜100の範囲で指定可能です。**

`&descAlignY= ` : 初期値は50で、画像の中央を意味します。
```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## Rotate

`&rotate= `  はテキストを回転させます。

負の値も指定可能です。

> ☞ `0 ~ 360`, `0 ~ -360`.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## Stroke

テキストのストローク（輪郭線）の色も変更できます。

Hexコードは「#」を除いて指定してください。

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> `strokeWidth`（ストロークの太さ）も併せて指定することをおすすめします。
>
> もし stroke `のみを指定した場合、strokeWidth` の初期値は 1 になります。

## Stroke-width

テキストのストローク（輪郭線）の太さを変更できます。

`stroke` を設定した後、`&strokeWidth=` を使用してください。

指定する値は 0以上 にしてください。

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> `stroke` と一緒に使用することをおすすめします。
>
> `strokeWidth` のみを指定した場合、`stroke` の色はデフォルトで 'B897FF' が使用されます。

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
