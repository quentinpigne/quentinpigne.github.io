---
title: "CSS Overlay Techniques"
weight: 4
tags: ["css", "overlay"]
---

#### Élément en position absolue

```html
<html>
  <body>
    <div class="overlay"></div>
  <body>
<html>
```

```css
html, body {
  min-height: 100%;
}

body {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.5); /*dim the background*/
}
```

#### Élément avec une position fixe

#### Utilisation d'un pseudo élément

#### Appliquer un grand contour à une modale

#### Appliquer une grande ombre à une modale

#### Utilisation de l'élément HTML `<dialog>`

## Références

- [https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/](https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/)
