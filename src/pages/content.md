---
title: 'Contenido de la página'
layout: '../layouts/Layout.astro'
---
# do an example of markdown file speaking of python
| Nombre | Apellido | Edad |
| ------ | -------- | ---- |
| Juan   | Perez    | 21   |
| Maria  | Sanchez  | 25   |

## or a code block

```python
def suma(a, b):
    return a + b
```

## or a list

- Item 1
- Item 2
- Item 3

## or a quote

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, doloremque.

## or a link

[Link to google](https://google.com)

## or an image

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
```

## 3. Build the static site

```bash
yarn build
```

This will generate a `dist` folder with all the static assets necessary to deploy to your favorite static site host.

## 4. Deploy your site

### 4.1. Deploy to [Netlify](https://www.netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=