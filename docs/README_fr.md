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

> À la recherche des traducteurs pour cette README.

> Il y a un [Générateur](https://capsule-render.vercel.app/) qui vous permet de créer des images simples. Cependant, nous y suggérons lire le ce document entier pour mieux comprendre cette logicielle.

## Navigation

1. [Utilisation](#utilisation)
2. [Types](#types)
3. [Couleur](#couleur)
4. [Liste de Couleurs Personnalisé](#liste-de-couleurs-personnalisé)
5. [Thème](#thème)
6. [Section](#section)
7. [Renversement](#renversement)
8. [Hauteur](#hauteur)
9. [Texte](#texte)
10. [Description](#description)
11. [Arrière-plan du texte](#arrière-plan-du-texte)
12. [Animation du texte](#animation-du-texte)
13. [Couleur du texte](#couleur-du-texte)
14. [Grandeur du texte](#grandeur-du-texte)
15. [Position horizontal du texte - X](#position-horizontal-du-texte)
16. [Position vertical du texte - Y](#position-vertical-du-texte)
17. [Grandeur du description](#grandeur-de-la-description)
18. [Position horizontal de la description - X](#position-horizontal-de-la-description)
19. [Position vertical de la description - Y](#position-vertical-de-la-description)
20. [Rotation](#rotation)
21. [Trait du texte](#trait-du-texte)
22. [Grandeur du trait](#grandeur-du-trait)
23. [Exemples](#examples)

Avez-vous des idées pour le projet ? -> [Soumettre un Idée](https://github.com/kyechan99/capsule-render/labels/Idea)
Soumettre un Changement -> [PR](https://github.com/kyechan99/capsule-render/pulls)

# Utilisation

```
https://capsule-render.vercel.app/api?
```

Simplement ajoute les paramètres au fin du URL. Comme ceci :

Markdown:

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML:

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## Types

Le paramètre `&type= ` change la forme de l'arrière-plan. Les formes dont vous pouvez choisir sont, en term anglais:

- [wave](#wave) : défaut
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

Ajoute `&type= ` au URL, suivi par la forme que vous voulez afficher.

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Couleur

Changer l'arrière-plan!

- `&color=auto` : Couleur complétement aléatoire. Une liste de toutes les couleurs se trouve [ici](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : Couleur complétement aléatoire dépendent sur le temp.
- `&color=random` : Couleur complètement aléatoire. Je ne sais pas le couleur qui s'affiche.
- `&color=gradient` : Dégrade de couleur complétement aléatoire. Une liste de toutes les couleurs se trouve [ici](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : Dégrade de couleur complétement aléatoire demandent sur le temp.
- `&color=_hexcode` : défaut(#B897FF)
  remplace `_hexcode` par le représentation hexadécimal d'un couleur spécifique.
- `&color=_custom_gradient` : Dégrade de couleur personnalisé `&color=0:EEFF00,100:a82da8`, produira { 0%: 'EEFF00', 100%: 'a82da8' }. [Example](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8)

Si vous utilise `auto` comme paramètre, il ne faut pas spécifier un couleur pour le texte avec `fontColor`.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> Si vous utilise un couleur seulement, il ne faut pas commencer le code hexadécimal avec un '#'

> Quand utiliser `timeAuto` et `timeGradient` ?
>
> Utilise `timeAuto` et `timeGradient` quand vous voulez utiliser le même Dégrade pour plusieurs sections

## Liste de Couleurs Personnalisé

Vous pouvez personnalisée la liste de couleur qui sont afficher avec `&color=auto` et `&color=gradient`.

Premièrement ajoute `&customColorList= ` au URL.

- Si vous utilise `&color=auto`, voyez la [liste des palettes de couleurs](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json).
- Si vous utilise `&color=gradient`, voyez la [liste des degrade de couleurs](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)

Choisie la palette que vous voulez et noter son valeur `idx`.

Par exemple, si les values idx sont 0, 2 et 3, ajouter `&customColorList=0,2,3` au URL.

Si vous voulez utiliser un couleur plusieurs fois il faut ajouter plusieurs fois à l’URL :
Par exemple: il est possible d'ajouter `idx=2` plusieurs fois dans un série : `&customColorList=0,2,2,2,2,3`

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## Thème

Vous pouvez utiliser une combinaison de couleur préfabriquer avec `theme=`.

Le thème vais prend priorité au-dessus de `color` et `fontColor` alors pour personnalisé le plus il faudra utiliser ces deux.

Vous pouvez voire la liste de thèmes dans le fichier [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json).

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> J'ajoute couramment des combinaison de couleur de cette projet [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) peut par peut.

## Section

Le paramètre `section= ` vous permette à inverser l'image.

- `&section=header` : (défaut)
- `&section=footer`

Ajoute `&section= ` au url avec sois `header` ou `footer` pour indiquer la direction.

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Renversement

Retourne l'image (et sa couleur) de gauche a doigt.

- `&reversal=false` : (défaut)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Hauteur

Change la grandeur de l'image. Le valeur défaut est 120.

Ajoute `&height= ` au URL.

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> Il ne faut pas ajouter `px` au mesurément.

## Texte

Le texte primaire sur l'image.

Ajoute du texte avec `&text= `.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> Il ne faut pas utiliser des caractères spécial, comme '#', '&', '/', etc...
>
> remplace les espaces avec `%20` et les nouveaux linges avec `-nl-`.

## Description

Une description additionnelle sur l’image.

Ajoute une description avec `&desc= `

```
![header](https://capsule-render.vercel.app/api?height=400&text=Bonjour%20Tous!&desc=Bonjour%20capsule%20render)
```

> Il ne faut pas utiliser des caractères spécial, comme '#', '&', '/', etc...
>
> remplace les espaces avec `%20` (espace seulement)

## Arrière-plan du texte

L'arrière-plan du texte

Ajoute `&textBG=true` pour utiliser.

> Si vous voulez agrandir l'arrière-plan,

> ajoute `%20` avant et après le texte.
> Ceci est par-ce-que l’arrière-plan est dépendu de la longueur du texte, et ajouter des espaces agrandit la longueur du texte.

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Animation du texte

Cree du mouvement dans le texte de votre image.

Ajoute `&animation= ` pour utiluzer.

- `fadeIn` : fondu 1.2s
- `scaleIn` : agrandissement .8s
- `blink` : clignoter .6s
- `blinking` : clignotement 1.6s
- `twinkling` : scintillement 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## Couleur du texte

Change le couleur du texte, le défaut est 000000.

Il ne faut pas inclure un `#` dans le code hexadécimal du couleur.

Ajoute `&fontColor= ` après `&text=` dans l'URL.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## Grandeur du texte

Change la grandeur du texte, le défaut est 70.

Ajoute `&fontSize= ` après `&text=` dans l'URL.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> Il ne faut pas ajouter `px` au grandeur.

## Position horizontal du texte

Change le position horizontal (x) du texte.
**valeur entre 0 et 100**

`&fontAlign= ` : Le valeur défaut est 50 se trouve au milieux de l'image.

> Dans le cas où il y a plusieurs lignes dans `&text= `, vous pouvez utiliser un `&fontAlign= ` pour chaque ligne nouvelle et le changement de position vont être appuiera individuellement pour chaque ligne.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## Position vertical du texte

Change le position vertical (y) du texte
**Valeur entre 0 et 100**

`&fontAlignY= ` : Valeur défaut est 50 qui se trouve au milieu de l'image.

> Au cas ou il y a plusieurs linges séparer par `-nl-`, vous pouvez spécifier un `&fontAlignY= ` pour chaque nouvelle ligne et le changement de position vais être appuis individuellement pour chaque ligne.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## Grandeur de la description

Changer la taille du description, le valeur défaut est 20.

Ajoute `&descSize= ` après `&desc= ` dans l'URL.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> Il ne faut pas specifier `px`

## Position horizontal de la description

Change le position horizontal (x) de la description.
**Valeur entre 0 et 100**

`&descAlign= ` : Valeur défaut est 50 au centre de l'image.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## Position vertical de la description

Change le position vertical (y) du description.
**Valeur enter 0 et 100**

`&descAlignY= ` : Le valeur défaut est 60 qui se trouve au milieu de l'image.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## Rotation

Utilise `&rotate= ` pour spécifier la rotation du texte.

Vous pouvez aussi utiliser les numéro négative.

> Il est suggéré d'utiliser un nombre enter `-360` et `360`. zéro est le défaut.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## Trait du texte

Change le couleur du trait du texte

Ajoute `&stroke=` au fin de l’URL.

Il faut utiliser un code couleur hexadécimal sans '#'

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> Quand vous utiliser ce paramètre, il est suggéré d'agrandir la traite avec `strokeWidth`.
>
> Sans `strokeWidth` le grandeur du trait devient 0.

## Grandeur du trait

Change la grandeur du trait du texte.

Ajoute `&strodeWidth=` au fin du URL.

Le valeur devrais être plus grand que 0.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> Il est suggéré d’utiliser cette paramètre avec `stroke`
>
> Sans `stroke` le couleur du trait devient 'B897FF'.

# Examples <a id="demo">

## Wave <a id="wave">

![wave](https://capsule-render.vercel.app/api?type=wave&color=auto&height=200&text=VAGUE)

## Egg <a id="egg">

![egg](https://capsule-render.vercel.app/api?type=egg&color=auto&height=210)

## Shark <a id="shark">

![shark](https://capsule-render.vercel.app/api?type=shark&color=gradient&height=140)

## Slice <a id="slice">

![slice](https://capsule-render.vercel.app/api?type=slice&color=auto&height=200&text=COIN&fontAlign=70&rotate=13&fontAlignY=25&desc=le%20description%20est%20aussi%20tourner.&descAlign=60&descAlignY=44)

## Rect <a id="rect">

![rect](https://capsule-render.vercel.app/api?type=rect&color=gradient&text=%20%20Rect%20%20&fontAlign=30&fontSize=30&textBg=true&desc=Utiluze%20textBg%20pour%20souligner%20le%20texte.&descAlign=60&descAlignY=50)

## Soft <a id="soft">

![soft](https://capsule-render.vercel.app/api?type=soft&color=auto&text=Bon%20pour%20utiluzer%20dans%20les%20autres%20README.&fontSize=40&animation=twinkling)

## Rounded <a id="rounded">

![rounded](https://capsule-render.vercel.app/api?type=rounded&color=timeAuto&text=Arrondie%20avec%20un%20traite&fontAlignY=50&fontSize=40&height=200&stroke=000000&strokeWidth=2)

## Cylinder <a id="cylinder">

![cylinder](https://capsule-render.vercel.app/api?type=cylinder&color=auto&text=Cylindre&fontAlignY=45&fontSize=40&height=150&animation=blinking&desc=le%20description%20est%20aussi%20anime&descAlignY=70)

## Waving <a id="waving">

![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Waving!&fontAlign=80&fontAlignY=40&color=gradient)

## Transparent <a id="transparent">

![transparent](https://capsule-render.vercel.app/api?type=transparent&fontColor=703ee5&text=Transparant&height=150&fontSize=60&desc=Only%20Use%20Text&descAlignY=75&descAlign=60)

## Venom <a id="venom">

![venom](https://capsule-render.vercel.app/api?type=venom&height=200&text=Je%20suis%20venom.&fontSize=70&color=0:8871e5,100:b678c4&stroke=b678c4)

## Speech <a id="speech">

![speech](https://capsule-render.vercel.app/api?type=speech&height=200&fontSize=45&color=gradient&text=speech-nl-bubble&animation=blinking&fontAlign=30,60&fontAlignY=35,55)

## Blur <a id="blur">

![blur](https://capsule-render.vercel.app/api?type=blur&height=300&color=gradient&text=Blur&strokeWidth=2&section=footer&reversal=true&fontAlign=50&stroke=E0E0E0&fontSize=55&textBg=false)

<hr/>
