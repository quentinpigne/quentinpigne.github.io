---
title: "Numpy"
weight: 1
tags: ["python", "data science"]
---

## Introduction

```python
import numpy as np
```

## Tableaux multidimensionnels

### Introduction aux tableaux multidimensionnels

La fonctionnalité de base de NumPy est `ndarray`, qui représente un tableau multidimensionnel. Pour en déclarer un, il suffit de créer une liste Python et d'utiliser le constructeur `np.array`.

```python
np.array([1, 2, 3, 4, 5, 6, 7, 8])
# Pour créer plusieurs dimensions, il suffit de créer des listes de listes
np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
# La manière dont les lignes sont arrangées donne la dimension du tableau
np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
# Voici maintenant un tableau à trois dimensions
np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
```

On dispose d'une fonctionnalité permettant de produire des nombres à la manière du générateur `range` de Python ([min], max, [step]) :

```python
np.arange(1, 9)
# On peut également gérer les dimensions dans un second temps
np.arange(1, 9).reshape(2, 4)
# L'ordre des dimensions est important
np.arange(1, 9).reshape(4, 2)
# Et voici arriver le tableau à trois dimensions
np.arange(1, 9).reshape(2, 2, 2)
# Enfin, on peut remettre à plat un tableau assez facilement
arr = np.arange(1, 9).reshape(2, 2, 2)
arr.ravel()
```

Voici quelques exemples supplémentaires avec la fonction `np.arange` pour bien visualiser son fonctionnement :

```python
np.arange(5)
np.arange(2, 7, 2)
np.arange(0, 7, 2.5)
```

Cet exemple montre également que lorsqu'on utilise un pas < 1, on obtient des nombres flottants (c'est aussi l'intérêt de `arange` : renvoyer des listes de réels, chose impossible avec range). En effet, tous les objets d'un tableau multidimensionnel sont forcement du même type.

```python
np.arange(2, 7, 2).dtype
np.arange(0, 7, 2.5).dtype.name
```

Le type utilisé est un type géré par NumPy et la conversion avec les types Python se fait naturellement. Le fait d'utiliser ces types de bas niveau est une des clés qui permet d'avoir de bonnes performances. Admettons maintenant que nous soyons face à un tableau multidimensionnel et que nous souhaitions récupérer des informations.

```python
a = np.arange(100).reshape(5, 5, 4)
# Voici comment obtenir le nombre de dimensions
a.ndim
# Quel est la taille de chaque dimension ?
a.shape
# Le nombre d'éléments dans le tableau, au total
a.size
# Le nom du type des données des objets présents dans le tableau (rappel)
a.dtype.name
# Et une dernière petite astuce utile, comment connaître leur taille
a.itemsize
# En effet, pour des raisons de performance, il peut être utile d'utiliser des objets de taille plus petite
a = np.arange(100, dtype='int8').reshape(5, 5, 4)
```

Pour terminer cette introduction, voici comment créer des tableaux multidimensionnels rapidement en les remplissant de 0 ou de 1 (on en profite pour montrer une manière de déclarer le type) :

```python
np.zeros((3, 4))
np.ones((3, 4), dtype=np.int8)
# En les remplissant aléatoirement (on reviendra juste apres sur la signification de l’opérateur de multiplication)
np.random.random((2, 2))
np.floor(10 * np.random.random((2, 2)))
# Ou encore en les remplissant à l'aide d'une fonction qui se base sur la position du nombre à générer (lignes et colonnes)
def f(x, y):
    return 10 * x + y
arr = np.fromfunction(f, (4, 3), dtype=np.int8)
```

Le tout permet de créer très rapidement des tableaux de données de la dimension de son choix.

### Opérateur crochet

S'il y a un opérateur qui est extrêmement utile et bien pensé, c'est bien l'opérateur crochet de Python. Cependant, NumPy le rend encore meilleur, c'est-à-dire avec toutes les qualités que l'on connaît à Python avec la gestion des dimensions. Reprenons l'exemple precedent :

```python
# et accédons au premier element
arr[0, 0]
# On utilise ici les coordonnées du point dans le tableau multidimensionnel. On peut aussi utiliser les nombres négatifs pour avoir le dernier element
arr[-1, -1]
# On peut utiliser les deux pour avoir le dernier élément de la seconde ligne par exemple
arr[1, -1]
# Et la cerise sur le gâteau, les tranches (slices en anglais) fonctionnent aussi
arr[1:2, -2:1]
arr[0:2, -2:]
# Mais elles fonctionnent vraiment
arr[::2, ::2]
# Voici un exemple avec le tableau en trois dimensions
a = np.arange(100, dtype='int8').reshape(5, 5, 4)
a[2]
a[2, 3]
a[2, 3, 1]
# On sait maintenant naviguer dans ces tableaux. Il n'est pas non plus inutile de savoir que l'on peut itérer
for l, lig in enumerate(a):
    for c, case in enumerate(lig):
        print("Case (%s, %s) = %s" % (l, c, case))
# Et que l'on peut itérer également sur les nombres indépendamment de leur structure
for e in a.flat:
    print(e)
```

### Operations basiques

En premier lieu, les algorithmes usuels de Python fonctionnent toujours avec les objets NumPy

```python
print 3 in np.array([1, 2, 3, 4, 5, 6, 7, 8])
```

Mais ces objets ont beaucoup plus à offrir. Pour commencer, on va voir certaines opérations qui concernent les nombres contenus dans les tableaux, peu importe comment lesdits tableaux sont organisés.

```python
a = np.arange(100, dtype='int8').reshape(5, 5, 4)
a.min()
a.max()
a.sum()
```

On prend en compte ici l'ensemble des nombres présents dans le tableau. Mais comme on peut le voir dans l'exemple suivant, on peut aussi réaliser ces operations selon un axe donné :

```python
a.sum(axis=0)
a.min(axis=1)
a.max(axis=2)
# On peut également les réaliser selon plusieurs axes
a.sum(axis=(0, 1))
a.sum(axis=(1, 2))
```

Il existe également une opération permettant d'effectuer un produit scalaire. Pour cela, il faut que les tableaux multidimensionnels soient alignés, c'est-à-dire que le nombre de colonnes corresponde, sinon :

```python
b = np.array([16, 42, 64])
# np.dot(a, b) -> ValueError: shapes (5,5,4) and (3,) not aligned: 4 (dim 2) != 3 (dim 0)
```

Avec deux opérandes corrects, on obtient un résultat :

```python
b = np.array([16, 42, 64, 48])
np.dot(a, b)
```

Cette opération peut également être menée sur deux tableaux unidimensionnels et de même sens. Créons deux tableaux distincts :

```python
a = np.arange(2, 9, 2)
b = np.arange(20, 5, -4)
# Voici leur produit scalaire
np.dot(a, b)
# Ce qu'il faut pas confondre avec la multiplication (qui multiplie entre eux chaque nombre aux memes positions)
a * b
```

On encore les tableaux multidimensionnels de sens contraire :

```python
a = np.arange(4).reshape(4, 1)
b = np.arange(4).reshape(1, 4)
np.dot(a, b)
```

Tout autre chose, on peut également réaliser des additions, soustractions, multiplications ou divisions :

```python
a - 5
a + 10
a * 2
a / 2
```

La encore, comme pour la multiplication entre deux tableaux multidimensionnels, on agit individuellement sur chaque membre du tableau en lui appliquant la transformation. On peut aussi citer ces deux exemples de transformation :

```python
a = np.array([2, 4, 6, 8])
np.exp(a)
np.sqrt(a)
```

Une autre fonctionnalité intéressante des tableaux multidimensionnels est la possibilité de les concaténer verticalement ou horizontalement

```python
a = np.arange(6).reshape(3, 2)
b = np.arange(6, 12).reshape(3, 2)
np.hstack((a, b))
np.vstack((a, b))
```

Cela fonctionne également avec la fonction `concatenate`, en précisant éventuellement l'axe sur lequel l'opération doit avoir lieu (indispensable si l'on a plus de deux dimensions). Enfin, il est aussi possible de réaliser une transposée :

```python
a.transpose()
```

Mais attention, on parle bien ici de tableaux multidimensionnels et non pas de matrices. Autrement dit, une matrice n'est pas un tableau a deux dimensions. Ce sont des objets totalement différents, qui n'ont pas du tout la même utilisation.

## Matrices

Une matrice, dans NumPy, est l'objet mathématique que l'on connaît. On entre ici dans l’algèbre linéaire. Nous n'allons pas rentrer dans un cours mathématique, mais nous précisons juste quelques notions élémentaires pour que la suite puisse bien se comprendre. Une matrice **m x n** est une matrice de m lignes et n colonnes. Des matrices sont dites de même taille si elles ont le meme nombre de lignes et de colonnes. Enfin, une matrice carrée est une matrice possédant le même nombre de lignes et de colonnes. Voici trois manières différentes de declarer une même matrice :

```python
np.matrix([[1, 2], [3, 4]])
np.matrix(np.arange(1, 5).reshape(2, 2))
np.matrix('1 2; 3 4')
```

Seules des matrices de même taille peuvent s'additionner ou se soustraire, ou même se diviser, selon un procède identique aux tableaux a deux dimensions, c'est-à-dire que l'opération se passe en réalité entre chaque membre ayant la même position :

```python
np.matrix('10 20; 30 40') + np.matrix('1 2; 3 4')
np.matrix('10 20; 30 40') - np.matrix('1 2; 3 4')
np.matrix('10 20; 30 40') / np.matrix('1 2; 3 4')
# Attention, avec le produit, on réalise en fait un produit matriciel qui est une operation entre les matrices
np.matrix('10 20; 30 40') * np.matrix('1 2; 3 4')
```

On peut aussi multiplier une matrice par un nombre, tout comme on l'a vu avec les tableaux multidimensionnels. Il est temps maintenant sur les elements spécifiques aux matrices et à l'algèbre linéaire. On peut commencer avec la recherche de la transposée.

```python
A = np.matrix('1. 2.; 3. 4.')
A.T
# Ce qui fonctionne également sur des matrices non carrées
X = np.matrix('1. 10.')
X.T
# On peut aussi multiplier deux matrices et cela respecte les règles mathématiques liées aux matrices
A * X.T
```

Il faut, entre autres, faire ceci dans le bon sens. D'une part, dans l'exemple précédent, la transposition est prioritaire sur la multiplication. D'autre part, dans l'exemple suivant, il faut que les matrices soient multipliables

```python
X = np.matrix('1.; 10.')
X.T
A*X
```

Dans cet exemple, on a déclare une matrice carrée. Une des opérations les plus utiles consiste à retrouver la matrice inverse
**A.I**. Et enfin, voici la fonction permettant de gérer la résolution d'une équation d'algèbre linéaire.

```python
np.linalg.solve(A, X.T)
```

On voit la l'utilisation du module *linalg*, un des modules importants de NumPy. Pour aller plus loin, vous pouvez vous rendre ici [http://docs.scipy.org/doc/numpy/reference/routines.linalg.html](http://docs.scipy.org/doc/numpy/reference/routines.linalg.html). Voici cependant quelques exemples basiques, par exemple le determinant d'une matrice :

```python
np.linalg.det(A)
# Et sa norme
np.linalg.norm(A)
```

## Polynômes

Le calcul polynomial est également une fonctionnalité importante pour le calcul scientifique. Cela sert, entre autres, en cryptographie par exemple. On va introduire ici la manière dont on peut déclarer un polynôme et les opérations courantes qu'il est possible de faire.

```python
p = np.poly1d([1, -6, 5])
```

On a donc déclaré un polynôme de second degré, composé de trois monômes de degrés respectifs 0, 1, 2. Voici comment obtenir les coefficients de ces monômes :

```python
p[0]
p[1]
p[2]
# Si on s’intéresse à tous les degrés supérieurs, on ne trouvera rien d'autre que des zéros
p[3]
p[6]
```

Attention, pour cela, on a utilise l'opérateur crochet. À ne pas confondre avec l'opérateur parenthèse (appel de fonction en Python), qui permet d'appeler la fonction au sens mathématique du terme et d'obtenir la valeur du polynôme pour une valeur de la variable donnée.

```python
p(0)
p(1)
p(2)
p(3)
p(4)
p(5)
p(6)
# On obtient ainsi un petit échantillon de valeurs qu'il est possible d'obtenir plus simplement
p(range(0, 7))
```

Voici maintenant une petite liste des opérations qu'il est possible de réaliser sur un polynôme. Multiplication par une constante.

```python
2 * p
# Addition à une constante
2 * p + 2
# Multiplication par un autre polynôme
p * p
# On peut aussi réaliser les opérations classiques de dérivation
p.deriv()
# Et d'integration
p.integ()
# Cette dernière offre également la possibilité de preciser la constante a utiliser
p.integ(k=42)
```

On peut également résoudre ces deux problématiques directement à partir des coefficients des monômes.

```python
np.polyint([1, -6, 5])
np.polyder([1, -6, 5])
np.polyint([1, -6, 5], k=42)
```

Enfin, on peut résoudre l'equation :

```python
p.roots
```

Et faire l'opération inverse, c'est-à-dire trouver le polynôme à partir des racines :

```python
np.poly([5, 1])
```

Voici la démarche complète pour créer l'objet polynôme :

```python
np.poly1d(np.poly([5, 1]))
```

## Algèbre booléenne

Gardons à l’esprit qu'il n'y a pas que les nombres qui peuvent être utilisés. On peut également travailler avec des booléens et réaliser des opérations avec :

```python
a = np.array([1, 42, 0], float)
np.logical_and(a > 0, a < 42)
```

On sait ici, élément par élément, lesquels remplissent les conditions données. On peut également réaliser de l'algèbre booléenne.

```python
b = np.array([True, True, False, True], bool)
np.logical_not(b)
c = np.array([True, False, True, False], bool)
np.logical_or(b, c)
np.logical_xor(b, c)
```

Et enfin, l'utilisation des fonctionnalités basiques de Python est possible.

```python
any(b)
all(b)
```

## Conclusion

La programmation scientifique est une discipline à part entière. On a effleuré ici les possibilités offertes par NumPy. Ce module profite des possibilités du langage Python tout en apportant énormément de choses et le tout rend Python particulièrement attractif pour un public de chercheurs ou doctorants, entre autres, qui souhaite pouvoir faire du calcul scientifique sans avoir à devenir des spécialistes de la programmation.

Ce n'est pas pour cette seule raison que Python et NumPy sont choisis, puisque la raison principale reste le fait que la bibliothèque permette de combler un besoin extrêmement large, le tout avec une licence tres permissive.
