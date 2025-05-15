<p align='center'>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=capsule%20render&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Decore%20seu%20perfil%20ou%20repositório%20no%20GitHub%20como%20eu!&descAlignY=51&descAlign=56"/>
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

> Procurando alguém para traduzir este README.

> Possui um [Gerador](https://capsule-render.vercel.app/) simples.
> Ainda assim, recomendo ler este README para ajustes pontuais e detalhados.

## Navegação

1. [Como usar](#como-usar)
2. [Tipos](#tipos)
3. [Cor](#cor)
4. [Lista de Cores Customizadas](#lista-de-cores-customizadas)
5. [Seção](#seção)
6. [Inversão](#inversão)
7. [Altura](#altura)
8. [Texto](#texto)
9. [Descrição](#descrição)
10. [Fundo do Texto](#fundo-do-texto)
11. [Animação do Texto](#animação-do-texto)
12. [Cor da Fonte](#cor-da-fonte)
13. [Tamanho da Fonte](#tamanho-da-fonte)
14. [Alinhamento da Fonte - X](#alinhamento-da-fonte)
15. [Alinhamento da Fonte - Y](#alinhamento-vertical-da-fonte)
16. [Tamanho da Descrição](#tamanho-da-descrição)
17. [Alinhamento da Descrição - X](#alinhamento-da-descrição)
18. [Alinhamento da Descrição - Y](#alinhamento-vertical-da-descrição)
19. [Girar](#Girar)
20. [Contorno do Texto](#contorno-do-texto)
21. [Demonstração](#demo) 

Qualquer sugestão de ideia -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) ou [PR](https://github.com/kyechan99/capsule-render/pulls)

# Como usar

```
https://capsule-render.vercel.app/api?
```

Basta escrever o parâmetro de consulta no final desta URL. Assim:

Markdown:

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML:

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## Tipos

Os dados do tipo alteram a imagem de fundo.

- [wave](#wave) : padrão
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

Escreva `&type= ` na URL

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Cor

Altere a imagem de fundo!

- `&color=auto` : Cor aleatória predefinido. A lista está [aqui](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : Cor aleatória predefinido, mas decidida pelo horário.
- `&color=random` : Cor completamentamente aleatória. Eu não sei quais cores serão mostradas.
- `&color=gradient` : Gradiente aleatório predefinido. A lista está [aqui](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : Gradiente aleatório predefinido, mas decidido pelo horário.
- `&color=_hexcode` : padrão(#B897FF)
- `&color=_custom_gradient` : Gradiente customizado. Se escrever `&color=0:EEFF00,100:a82da8`, será convertido para { 0%: 'EEFF00', 100%: 'a82da8' }. (exemplo [DEMO](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

Se usar o modo `auto`, não há necessidade de alterar a `fontColor`.
O `auto` também altera a cor da fonte automaticamente.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> Se usar uma cor estática, não escreva o '#'

> Quando usar `timeAuto` e `timeGradient`?
>
> Use a seção `header` e `footer` ao mesmo tempo.

## Lista de Cores Customizadas

Você pode **personalizar a lista de cores** que aparecerão aleatoriamente apenas para `&color=auto` e `&color=gradient`.

Escreva `&customColorList= ` na URL.

- Se usar `&color=auto`, veja a [lista de paletas](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json).
- Se usar `&color=gradient`, veja a [lista de gradientes](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json).

Escolha os padrões de cor que você deseja e lembre-se do valor `idx`.

Por exemplo, se os valores de `idx` forem 0, 2 e 3, escreva: `&customColorList=0,2,3`

Se quiser que o `idx=2` apareça mais vezes, você pode escrevê-los repetidamente. (exemplo: `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## Tema

Você pode usar a combinação especificada usando `theme=`.

Mesmo que `color` e `fontColor` sejam usados, o tema tem a maior prioridade.

Confira a lista de temas disponíveis em [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json).

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> Atualmente estou adicionando combinações do [Link:tema](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) aos poucos.

## Seção

Os dados de seção fazem a inversão da imagem de fundo.

- `&section=header` : (padrão)
- `&section=footer`

Escreva `&section= ` na URL

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Inversão

Inverte a imagem da esquerda para a direita. (E as cores ao mesmo tempo)

- `&reversal=false` : (padrão)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Altura

Altera o tamanho da imagem. O valor padrão é 120.

Escreva `&height= ` na URL

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> Não escreva `px`

## Texto

Adicione texto sobre a imagem.

Escreva algo `&text= `.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> Não é possível usar alguns caracteres especiais, como '#', '&', '/' ...
>
> Isso pode causar confusão na API

> É recomendado usar `%20` (espaço) e `-nl-` (nova linha) apenas

## Descrição

Adicione uma descrição sobre a imagem.

Escreva algo `&desc= `.

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> Não é possível usar alguns caracteres especiais, como '#', '&', '/' ...
>
> Isso pode causar confusão na API

> É recomendado usar `%20` (espaço) apenas

## Fundo do Texto

Fundo do texto.

Escreva `&textBg=true` para ativar.

> Se quiser aumentar o tamanho do fundo,
> adicione `%20` entre os valores do texto.
> Isso ocorre porque o tamanho do fundo depende do comprimento do texto em inglês. (%20 significa espaçamento)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Animação do Texto

Faça o texto dinâmico.

Escreva `&animation= `, se quiser usar.

- `fadeIn` : fadeIn 1.2s
- `scaleIn` : scaleIn .8s
- `blink` : blink .6s
- `blinking` : blinking 1.6s
- `twinkling` : twinkling 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## Cor da Fonte

Altere a cor do texto. O valor padrão é 000000.

O valor deve ser o código Hex sem o '#'

Escreva `&fontColor= ` após a consulta **Texto**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## Tamanho da Fonte

Altere o tamanho da fonte do texto. O valor padrão é 70.

Escreva `&fontSize= ` após a consulta **Texto**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> Não escreva `px`

## Alinhamento da Fonte

Altere o alinhamento horizontal do texto (x). Escreva o número **entre 0~100**

`&fontAlign= ` : O valor padrão é 50, no centro da imagem

> Se houver várias linhas em `&text= ` (`-nl-`), fornecer múltiplos `&fontAlign= ` aplicará o alinhamento horizontal individualmente para cada linha.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## Alinhamento Vertical da Fonte

Altere o alinhamento vertical do texto (y). Escreva o número **entre 0~100**

`&fontAlignY= ` : O valor padrão para uma linha é 50 (centro da imagem). Para várias linhas (separadas por `-nl-`), o padrão será calculado para que as linhas fiquem empilhadas uma em cima da outra e centralizadas.

> Se houver várias linhas em `&text= ` (`-nl-`), fornecer múltiplos `&fontAlignY= ` aplicará o alinhamento vertical individualmente para cada linha.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## Tamanho da Descrição

Altere o tamanho da fonte da descrição. O valor padrão é 20.

Escreva `&descSize= ` após a consulta **desc**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> Não escreva `px`

## Alinhamento da Descrição

Altere o alinhamento horizontal da descrição (x). Escreva o número **entre 0~100**

`&descAlign= ` : O valor padrão é 50, no centro da imagem

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## Alinhamento Vertical da Descrição

Altere o alinhamento vertical da descrição (y). Escreva o número **entre 0~100**

`&descAlignY= ` : O valor padrão é 60, no centro da imagem

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## Girar

Use `&rotate= ` para girar o texto.

Você também pode usar números negativos.

> Recomendação de número. ☞ `0 ~ 360`, `0 ~ -360`.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## Contorno do Texto

Altere o contorno do texto.

Escreva `&stroke=` após a consulta.

O valor deve ser o código Hex sem o '#'

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> Recomenda-se usar com `strokeWidth`.
>
> Quando usado sozinho, o `strokeWidth` tem o valor padrão de 1.

## Largura do Contorno

Altere a largura do contorno do texto.

Escreva `&strokeWidth=` após a consulta do contorno.

O valor deve ser maior ou igual a 0.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=10)
```

> É recomendado usar junto com `stroke`.
>
> Quando utilizado sozinho, a cor padrão do contorno é 'B897FF'.

# Demo

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
