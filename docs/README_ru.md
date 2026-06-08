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
  <a href="../README.md">English</a> 
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
> Доступен простой [Генератор](https://capsule-render.vercel.app/).
> Однако рекомендуется прочитать этот README для более точной настройки.

> [!IMPORTANT]
> Сервис предоставляется «как есть» и может быть нестабильным из-за лимитов использования или скачков трафика.
>
> Для надёжной работы [форкните](https://github.com/kyechan99/capsule-render/fork) репозиторий и разверните его на собственном [экземпляре Vercel](https://vercel.com/new) (или другой хостинг платформе).

## Навигация

1. [Как использовать](#как-использовать)
2. [Типы](#типы)
3. [Цвет](#цвет)
4. [Пользовательский список цветов](#пользовательский-список-цветов)
5. [Тема](#тема)
6. [Секция](#секция)
7. [Отражение](#отражение)
8. [Высота](#высота)
9. [Текст](#текст)
10. [Описание](#описание)
11. [Фон текста](#фон-текста)
12. [Анимация текста](#анимация-текста)
13. [Цвет шрифта](#цвет-шрифта)
14. [Семейство шрифтов](#семейство-шрифтов)
15. [Размер шрифта](#размер-шрифта)
16. [Выравнивание шрифта — X](#выравнивание-шрифта--x)
17. [Выравнивание шрифта — Y](#выравнивание-шрифта--y)
18. [Размер описания](#размер-описания)
19. [Выравнивание описания — X](#выравнивание-описания--x)
20. [Выравнивание описания — Y](#выравнивание-описания--y)
21. [Поворот](#поворот)
22. [Обводка](#обводка)
23. [Толщина обводки](#толщина-обводки)
24. [Примеры](#demo)

Есть идея? → [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) или [PR](https://github.com/kyechan99/capsule-render/pulls)

# Как использовать

```
https://capsule-render.vercel.app/api?
```

Просто добавьте query-параметры в конец этого URL. Например:

Markdown:

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML:

```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## Типы

Параметр `type` меняет фоновое изображение.

- [wave](#wave) : по умолчанию
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

Добавьте `&type=` в URL

```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Цвет

Меняет фоновое изображение!

- `&color=auto` : проверенный случайный цвет. Список [здесь](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : проверенный случайный цвет, но выбирается по времени.
- `&color=random` : действительно случайный цвет. Какой именно — неизвестно.
- `&color=gradient` : проверенный случайный градиент. Список [здесь](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : проверенный случайный градиент, но выбирается по времени.
- `&color=_hexcode` : по умолчанию (#B897FF)
- `&color=_custom_gradient` : пользовательский градиент. Если написать `&color=0:EEFF00,100:a82da8`, оно будет преобразовано в { 0%: 'EEFF00', 100%: 'a82da8' }. (напр. [DEMO](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8))

При использовании режима `auto` менять `fontColor` не нужно.
`auto` также автоматически меняет `fontColor`.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```

> При использовании статического цвета не пишите '#''

> Когда использовать `timeAuto` и `timeGradient`?
>
> Когда одновременно используются секции `header` и `footer`.

## Пользовательский список цветов

Вы можете **настроить список цветов**, которые будут случайно выбираться только для `&color=auto` и `&color=gradient`.

Добавьте `&customColorList=` в URL.

- При `&color=auto` смотрите [список палитры](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json).
- При `&color=gradient` смотрите [список градиентов](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json).

Выберите нужные цветовые схемы и запомните значение `idx`.

Например, если idx равны 0, 2 и 3, напишите: `&customColorList=0,2,3`

Чтобы `idx=2` появлялся чаще, можно повторить его несколько раз. (напр. `&customColorList=0,2,2,2,2,3`)

```
![header](https://capsule-render.vercel.app/api?color=gradient&customColorList=0,2,2,5,30)
```

## Тема

Можно использовать готовую комбинацию через `theme=`.

Даже если указаны `color` и `fontColor`, тема имеет наивысший приоритет.

Вы можете посомтреть список доступных тем в [pallete_theme.json](https://github.com/kyechan99/capsule-render/blob/master/src/pallete_theme.json).

```
![reversal](https://capsule-render.vercel.app/api?type=rect&text=RECT&fontAlign=30&fontSize=30&desc=Use%20theme&descAlign=60&descAlignY=50&theme=radical)
```

> Сейчас комбинации из [Link:theme](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) добавляются постепенно.

## Секция

Параметр `section` переворачивает фоновое изображение.

- `&section=header` : (по умолчанию)
- `&section=footer`

Добавьте `&section=` в URL

```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Отражение

Отражает изображение по горизонтали. (Цвет тоже меняется)

- `&reversal=false` : (по умолчанию)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Высота

Меняет размер изображения. Значение по умолчанию — 120.

Добавьте `&height=` в URL

```
![header](https://capsule-render.vercel.app/api?height=400)
```

> Не пишите `px`

## Текст

Текст поверх изображения.

Напишите что-нибудь в `&text=`.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> Нельзя использовать некоторые спецсимволы: «#», «&», «/» и т. д.
>
> Они ломают API

> Рекомендуется использовать только `%20` (пробел) и `-nl-` (новая строка)

## Описание

Описание поверх изображения.

Напишите что-нибудь в `&desc=`.

```
![header](https://capsule-render.vercel.app/api?height=400&text=Hello%20World!&desc=Hello%20capsule%20render)
```

> Нельзя использовать некоторые спецсимволы: «#», «&», «/» и т. д.
>
> Они ломают API

> Рекомендуется использовать только `%20` (пробел) и `-nl-` (новая строка)

## Фон текста

Фон за текстом.

Добавьте `&textBg=true`, чтобы включить.

> Чтобы увеличить размер фона,
> добавьте `%20` между значениями текста.
> Размер фона зависит от длины текста. (%20 — пробел)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Анимация текста

Делает текст динамическим.

Добавьте `&animation=`, если нужно.

- `fadeIn` : fadeIn 1.2s
- `scaleIn` : scaleIn .8s
- `blink` : blink .6s
- `blinking` : blinking 1.6s
- `twinkling` : twinkling 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## Цвет шрифта

Меняет цвет текста. Значение по умолчанию — 000000.

Значение должно быть hex-кодом без '#'

Добавьте `&fontColor=` после параметра **Text**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## Семейство шрифтов

Меняет семейство шрифта текста.

Добавьте `&fontFamily=` после параметра **Text**.

Используйте `%20` для пробелов в названии шрифта.

> `fontFamily` применяется как CSS `font-family`, но фактический рендеринг зависит от шрифтов в среде рендеринга. Если шрифт недоступен, используются запасные.

```
![header](https://capsule-render.vercel.app/api?text=Hello%20World!&fontFamily=Segoe%20UI)
```

## Размер шрифта

Меняет размер шрифта текста. Значение по умолчанию — 70.

Добавьте `&fontSize=` после параметра **Text**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> Не пишите `px`

## Выравнивание шрифта — X

Горизонтальное выравнивание текста (x). Укажите число **от 0 до 100**

`&fontAlign=` : по умолчанию 50 — центр изображения

> Если в `&text=` несколько строк (`-nl-`), несколько значений `&fontAlign=` применят разное горизонтальное выравнивание к каждой строке.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## Выравнивание шрифта — Y

Вертикальное выравнивание текста (y). Укажите число **от 0 до 100**

`&fontAlignY=` : для одной строки по умолчанию 50 (центр изображения). Для нескольких строк (через `-nl-`) значение по умолчанию рассчитывается так, чтобы строки были сложены друг на друга и отцентрированы.

> Если в `&text=` несколько строк (`-nl-`), несколько значений `&fontAlignY=` применят разное вертикальное выравнивание к каждой строке.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## Размер описания

Меняет размер шрифта описания. Значение по умолчанию — 20.

Добавьте `&descSize=` после параметра **desc**

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40&desc=Desc&descSize=30)
```

> Не пишите `px`

## Выравнивание описания — X

Горизонтальное выравнивание описания (x). Укажите число **от 0 до 100**

`&descAlign=` : по умолчанию 50 — центр изображения

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70&desc=Desc&descAlign=20)
```

## Выравнивание описания — Y

Вертикальное выравнивание описания (y). Укажите число **от 0 до 100**

`&descAlignY=` : по умолчанию 60 — центр изображения

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20&desc=Desc&descAlignY=40)
```

## Поворот

Используйте `&rotate=`, чтобы повернуть текст.

Можно использовать отрицательные числа.

> Рекомендуемый диапазон: `0 ~ 360`, `0 ~ -360`.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```

## Обводка

Меняет обводку текста.

Добавьте `&stroke=` в query

Значение должно быть hex-кодом без '#'

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00)
```

> Рекомендуется использовать вместе с `strokeWidth`.
>
> При использовании отдельно `strokeWidth` по умолчанию равен 1.

## Толщина обводки

Меняет толщину обводки текста.

Добавьте `&strokeWidth=` после параметра stroke

Значение должно быть больше или равно 0.

```
![header](https://capsule-render.vercel.app/api?type=rect&height=200&text=Stroke%20Test&fontAlign=70&stroke=00FF00&strokeWidth=3)
```

> Рекомендуется использовать вместе с `stroke`.
>
> При использовании отдельно цвет обводки по умолчанию — 'B897FF'.

# Примеры <a id="demo">

## Wave <a id="wave">

[![wave](samples/wave.svg)](https://capsule-render.vercel.app/api?type=wave&color=auto&height=200&text=WAVE)

## Egg <a id="egg">

[![egg](samples/egg.svg)](https://capsule-render.vercel.app/api?type=egg&color=auto&height=210)

## Shark <a id="shark">

[![shark](samples/shark.svg)](https://capsule-render.vercel.app/api?type=shark&color=gradient&height=140)

## Slice <a id="slice">

[![slice](samples/slice.svg)](https://capsule-render.vercel.app/api?type=slice&color=auto&height=200&text=SLICE&fontAlign=70&rotate=13&fontAlignY=25&desc=desc%20function%20is%20also%20rotated.&descAlign=60&descAlignY=44)

## Rect <a id="rect">

[![rect](samples/rect.svg)](https://capsule-render.vercel.app/api?type=rect&color=gradient&text=%20%20RECT%20%20&fontAlign=30&fontSize=30&textBg=true&desc=Use%20%27textBg%27%20to%20highlight%20%27text%27&descAlign=60&descAlignY=50)

## Soft <a id="soft">

[![soft](samples/soft.svg)](https://capsule-render.vercel.app/api?type=soft&color=auto&text=Good%20to%20use%20with%20other%20readme&fontSize=40&animation=twinkling)

## Rounded <a id="rounded">

[![rounded](samples/rounded.svg)](https://capsule-render.vercel.app/api?type=rounded&color=timeAuto&text=Rounded%20with%20stroke&fontAlignY=50&fontSize=40&height=200&stroke=000000&strokeWidth=2)

## Cylinder <a id="cylinder">

[![cylinder](samples/cylinder.svg)](https://capsule-render.vercel.app/api?type=cylinder&color=auto&text=Cylinder&fontAlignY=45&fontSize=40&height=150&animation=blinking&desc=desc%20is%20also%20animated&descAlignY=70)

## Waving <a id="waving">

[![waving](samples/waving.svg)](https://capsule-render.vercel.app/api?type=waving&height=200&text=Waving!&fontAlign=80&fontAlignY=40&color=gradient)

## Transparent <a id="transparent">

[![transparent](samples/transparent.svg)](https://capsule-render.vercel.app/api?type=transparent&fontColor=703ee5&text=Transparent&height=150&fontSize=60&desc=Only%20Use%20Text&descAlignY=75&descAlign=60)

## Venom <a id="venom">

[![venom](samples/venom.svg)](https://capsule-render.vercel.app/api?type=venom&height=200&text=I%20am%20Venom.&fontSize=70&color=0:8871e5,100:b678c4&stroke=b678c4)

## Speech <a id="speech">

[![speech](samples/speech.svg)](https://capsule-render.vercel.app/api?type=speech&height=200&fontSize=45&color=gradient&text=speech-nl-bubble&animation=blinking&fontAlign=30,60&fontAlignY=35,55)

## Blur <a id="blur">

[![blur](samples/blur.svg)](https://capsule-render.vercel.app/api?type=blur&height=300&color=gradient&text=Blur&strokeWidth=2&section=footer&reversal=true&fontAlign=50&stroke=E0E0E0&fontSize=55&textBg=false)

<hr/>
