---
title: "Matplotlib"
weight: 2
tags: ["python", "data science"]
---

L'objectif de cet article est de vous faire découvrir, au travers d'exemples, quelques'unes des possibilités du module `matplotlib`. Avant de commencer, il est important de comprendre que matplotlib offre 2 interfaces distinctes :

* pylab est une interface similaire à celle de matlab et existe essentiellement pour des raisons historiques.
* pyplot est l'interface officielle que je vous recommande d'utiliser.

Tout au long de cet article, on supposera donc que les commandes suivantes ont été exécutées dans chaque session interactive (ou bien se trouvent au début de chaque script)

```python
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.backends import pylab_setup
from matplotlib.lines import lineStyles
```

## IPython

IPython est un shell Python avec des fonctionnalités avancées et permet notamment de réaliser des figures de façon interactive. Cela veut dire, entre autres choses, que vous pouvez visualiser votre figure et continuer à taper des commandes dans l’interpréteur, ce qui n'est pas le cas avec le shell Python normal.

```shell
ipython --pylab
```

Par ailleurs, les dernières versions de IPython offre une fonctionnalité de notebook qui permet d'avoir un shell Python interactif dans un navigateur et de produire les figures à l'intérieur du navigateur, ce qui est très pratique (ne pas oublier l'option `--pylab`)

## Premiers pas

matplotlib est une librairie orientée vers la visualisation scientifique et possède donc un grand nombre de fonctions dédiées à ce domaine. L'objet le plus simple est la fonction plot, qui permet de relier une suite de points. Par exemple, si l'on souhaite tracer la fonction cosinus, il faut générer au préalable l'ensemble des points X et Y décrivant la courbe. Pour cela, on se fixe d'abord un domaine de définition en utilisant la librairie NumPy, qui permet de construire et de manipuler les matrices et vecteurs de manière très efficace.

```python
X = np.linspace(0, 2*np.pi, 256)
```

Cette instruction construit un vecteur de 256 valeurs uniformément réparties entre 0 et 2pi (exclu). Il suffit alors de générer les cosinus pour chaque valeur, ce que numpy permet de faire en travaillant directement sur les vecteurs :

```python
Y = np.cos(X)
```

Il ne nous reste plus alors qu'à tracer la courbe et à visualiser le résultat :

```python
plt.plot(X, Y)
plt.show() # Optionnel si vous utilisez IPython en mode pylab
```

Si tout s'est bien passe, vous devriez avoir à l'écran une fenêtre qui s'affiche avec la courbe du cosinus.

## Configuration et paramétrage

Pour afficher la courbe des cosinus, matplotlib effectue un certain nombre de choix par défaut :

* taille initiale de la fenêtre et choix du DPI (dots per inch),
* nombre de repères sur les axes,
* valeurs maximales et minimales pour l'axe des abscisses et des ordonnées,
* style, épaisseur et couleur du trace,
* presence ou absence de marqueur,
* etc...

Évidemment, tout peut être change, soit de façon générale pour toutes les nouvelles figures, soit au cas par cas via les options des différentes commandes et les méthodes des différents objets. Pour connaître l'ensemble de ces options, il faut se reporter à la documentation ou bien à ce tutoriel. Voila, par exemple, la même figure que la précédente ou l'on a explicitement choisi chaque paramètre :

```python
# Création d'une figure de taille 8x6 (points) en utilisant un DPI de 80
fig = plt.figure(figsize=(8,6), dpi=80)

# Création d'une sous-figure
ax = plt.subplot(1, 1, 1)

# Création de X et Y
X = np.linspace(0, 2*np.pi, 256)
Y = np.cos(X)

# Affichage de la courbe en bleu, épaisseur 1, trait continu
ax.plot(X, Y, color="blue", linewidth=1.0, linestyle="-")

# Limites en abscisse
ax.set_xlim(0, 2*np.pi)

# Indicateurs sur les abscisses
ax.set_xticks(np.linspace(0, 6, 6, endpoint=True))

# Limites en ordonnée
ax.set_ylim(-1.0, 1.0)

# Indicateurs sur les ordonnées
ax.setyticks(np.linspace(-1, 1, 5, endpoint=True))

# On sauve la figure
plt.savefig('cosinus.png', dpi=72)

# Affiche la figure
plt.show()
```

Il existe une multitude d'objets qui facilitent la visualisation scientifique et un livre entier ne suffirait pas à tous les présenter. Le plus simple pour en avoir un petit apercu est d'aller voir la galerie d'exemples de matplotlib. Pour la suite de cet article, nous allons plutôt essayer de sortir des sentiers battus.

## Manipulation d'image

matplotlib permet d'afficher des images de façon tres rapide via la commande imshow :

```python
from matplotlib._png import read_png
plt.imshow(read_png('lena.png'))
plt.show()
```

### Pixel versus point

Ce qui peut être un peu perturbant cependant, c'est que la taille de l'image affichée ne correspond pas à la taille réelle de l'image. En effet, matplotlib gère en interne une figure comme un objet vectoriel pouvant être redimensionné à volonté et, par defaut, toute figure est entourée par un cadre délimitant toute sa surface. Tout ce qui est hors de ce cadre est généralement utilisé pour afficher les informations telles que le titre, les étiquettes des axes, etc. Si l'on souhaite maintenant afficher la même image de façon naturelle, il faut le préciser explicitement :
