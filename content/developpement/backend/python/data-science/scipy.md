---
title: "Scipy"
weight: 3
tags: ["python", "data science"]
---

## Présentation de SciPy

### Différences entre NumPy et SciPy

NumPy est une bibliothèque qui implémente, entre autres, les fonctionnalités présentées dans l'article précédent. Historiquement, elle est la bibliothèque de référence pour ce genre de problématiques. Elle a pour vocation à rester dans ce domaine précis et elle assure une compatibilité ascendante pour permettre à ses utilisateurs une certaine stabilité.

Le coeur du module NumPy est le tableau multidimensionnel et les fonctionnalités basiques qui lui sont liées, telles que l'indexation, le tri, ou encore le modelage des données, par exemple. Cependant, elle contient aussi les composants d'algèbre linéaire qui devraient plutôt appartenir à SciPy. Pour faire simple, toutes les nouvelles fonctionnalités se retrouvent dans SciPy, alors que les fonctionnalités stables et qui ont vocation à l'être sont dans NumPy.

Concrètement, SciPy est, comme on le disait en introduction, un meta-projet qui réunit plusieurs autres bibliothèques de calcul scientifique. Dans le fichier d'initialisation du module SciPy, on trouve tout simplement ceci :

```python
from numpy import *
```

Autrement dit, toutes les fonctionnalités de NumPy sont intégrées à SciPy. Mais ce n'est en réalité pas aussi simple. Parce qu'apres cette instruction, on trouve d'autres importations dont certaines vont écraser l'une ou l'autre des fonctionnalités de NumPy, les remplaçants par de nouvelles qui sont des améliorations de celles de NumPy. Par exemple, on peut trouver un peu plus loin :

```python
from numpy.lib.scimath import *
```

Cet import écrase certaines fonctionnalités de base de NumPy telles que `log10`, par exemple.

```python
import inspect
import scipy as sp
from scipy.stats._continuous_distns import johnsonsb, johnsonsu, cauchy
from numpy.random.mtrand import pareto
from scipy.weave.inline_tools import inline
inspect.getfile(sp.log10)
```

D'autre part, on peut trouver des fonctions qui, à première vue, font doublon, mais qui sont en réalité différentes :

```python
import numpy as np
import scipy as sp
np.sqrt(-1)
sp.sqrt(-1)
np.log(-1)
sp.log(-1)
```

Cet exemple montre que NumPy travaille sur des réels, alors que SciPy peut travailler avec les nombres complexes.

Parfois, la signature de la fonction est modifiée, ce qui brise la compatibilité ascendante. Par exemple, NumPy a une fonction `numpy.fft.fft2(a, s=None, axes=(-2, -1))`, tandis que SciPy a une fonction `scipy.fft.fft2(x, shape=None, axes=(-2, -1), overwrite_x=0)`. Voici comment le verifier :

```python
from numpy.fft import fft2 as np_fft2
from scipy.fftpack import fft2 as sp_fft2
help(np_fft2)
help(sp_fft2)
```

D'une manière générale, les deux bibliothèques sont utiles. Si vous n'utilisez que des tableaux multidimensionnels, vous pouvez n'utiliser que NumPy. Si vous utilisez l'algèbre linéaire, les deux bibliothèques vous seront utiles suivant votre besoin. Par rapport à ce qui a été présenté dans l'article sur NumPy, vous trouverez dans la documentation des variantes qui utilisent des fonctions spécifiques de SciPy, comme pour trouver l'inverse d'une matrice, par exemple. Ceci dit, les differences restent minimes.

Par contre, SciPy dispose également de nombreux autres modules et nous allons des maintenant en présenter une selection.

### Bibliothèques externes de SciPy

SciPy peut être vu comme un assemblage de diverses fonctionnalités au sein d'un seul projet, lequel est destiné a être une grande boîte à outils permettant de toucher à tout et d'utiliser ce qui se fait de mieux dans divers domaines.

Ainsi, outre NumPy, SciPy intègre un grand nombre d'autres projets. Une bonne partie des fonctionnalités de SciPy sont une intégration de bibliothèques de références écrites en FORTRAN, ce langage ayant été (et étant toujours dans une certaine mesure) une référence dans le calcul scientifique.

SciPy dispose d'un module particulier, nomme lib, qui intègre l'ensemble des connecteurs vers des bibliothèques externes, parmi lesquels *lib.lapack*, qui est un connecteur a la bibliothèque LAPACK (Linear Algebra PACKage, écrite en FORTRAN, [http://www.netlib.org/lapack/](http://www.netlib.org/lapack/)) et *lib.blas*, qui est un connecteur vers la bibliothèque BLAS (Basic Linear Algebra Subprograms, [http://www.netlib.org/blas/](http://www.netlib.org/blas/)).

Certains autres modules, comme scipy.odr que l'on présentera plus loin, utilisent également des bibliothèques FORTRAN.

### Migrer vers SciPy

De la meme manière que SciPy utilise des bibliothèques FORTRAN, vous avez aussi la possibilité d'importer vos propres fichiers réalisés avec ce langage. La bibliothèque *scipy.io* permet de charger des fichiers FORTRAN à l'aide de la classe `FortranFile`. Ceci vous permet de migrer de FORTRAN vers SciPy et d’éviter ainsi d'avoir à repartir de zéro.

D'autre part, SciPy offre des possibilités intéressantes pour ceux qui utilisaient auparavant MATLAB. De manière à faciliter la migration vers SciPy, il permet de traiter des fichiers *.mat*, toujours à l'aide de la bibliothèque *scipy.io* et plus particulièrement des fonctions suivantes :

* *loadmat* (permet de charger un fichier .mat);
* *savemat* (permet de sauvegarder des donnees dans un fichier .mat);
* *whosmat* (permet de lister les variables d'un fichier .mat).

On peut donc passer de MATLAB à SciPy sans avoir à réécrire tout le code que l'on avait produit auparavant, ce qui facilite grandement la transition.

SciPy peut également traiter des fichiers générés avec Matrix Market ([http://math.nist.gov/MatrixMarket/](http://math.nist.gov/MatrixMarket/)) à l'aide des fonctions `mmread`, `mmwrite` et `mminfos` permettant respectivement de lire, écrire et obtenir des informations sur ces fichiers.

Il peut aussi traiter des fichiers IDL. IDL est un langage apparu dans les années 1990, a une époque de transition et destine a un public non informaticien qui devait traiter des donnees d'une manière simple, lisible et efficace, soit exactement le meme positionnement que SciPy aujourd'hui. La difference reside dans le coût élevé de la licence IDL, et le fait que ce langage n'ait pas su se moderniser depuis.

Toujours est-il que dans le but de permettre de réutiliser le travail réalisé en IDL, SciPy offre une fonction `readsav` permettant de lire les fichiers .sav, générés par IDL.

On notera également la possibilité de traiter des fichiers audio au format WAV (en lecture et en écriture, ce qui est utile pour analyser ou générer des sons a partir d'un tableau multidimensionnel NumPy), les fichiers ARFF (Attribute-Relation File Format), qui est un format NetCDF, qui permettent de partager des données stockées sous la forme de tableaux.

### Modules usuels

Une des fonctionnalités essentielles de SciPy est l’algèbre linéaire. Le module de base est *linalg* (Linear algebra routines). Il serait redondant de le presenter ici, puisque l'essentiel a ete vu dans l'article sur NumPy. On peut également citer le module sparse permettant de traiter spécifiquement des matrices creuses (des matrices avec tout plein de zeros dedans, [http://fr.wikipedia.org/wiki/Matrice_creuse](http://fr.wikipedia.org/wiki/Matrice_creuse)). Ce dernier dispose de nombreux sous-modules :

* *sparse.linalg* : algèbre linéaire dédié aux matrices creuses;
* *sparse.linalg.dsolve* : resolution d'equations représentées par une matrice creuse;
* *sparse.linalg.eigen* : resolution d'equations linéaires utilisant les valeurs propres;
* *sparse.linalg.eigen.lobpcg* : méthode du gradient conjugue (Locally Optimal Block Preconditioned Conjugate Gradient Method)
* *sparse.linalg.eigen.arpack* : recherche de la valeur propre par l'utilisation de méthodes itératives

On peut également citer trois autres grands modules, qui ne seront pas présentés en details dans cet article. Il s'agit du module *scipy.spatial* permettant de manipuler des structures de donnees spéciales et qui contient l'implementation d'algorithmes lies a ce domaine scientifique, ainsi que du module *scipy.signal* qui permet de gérer tous les aspects du traitement de signaux. Enfin, il existe un dernier module intéressant qui est *scipy.ndimage* et qui permet de gérer des images multidimensionnelles.

## Statistiques

Le module *scipy.stats* est un ensemble conséquent de fonctions statistiques (Bradford, Burr, Cauchy, Pareto, Gamma, Johnson, ...). On peut ainsi calculer une loi de fiabilité, une loi normale, une loi log-normale, une loi exponentielle (ou plus généralement, une loi de Waibull), entre autres.

Chacune de ces lois se base sur une fonction de densité de probabilité (pdf: probability density function). Pour Cauchy, par exemple, il s'agit de :

```math
$$cauchy.pdf(x) = \frac{1}{\pi (1 + x^2)}$$
```

On peut également citer d'autres exemples :

```math
$$johnsonsb.pdf(x;a,b) = \frac{b}{x (1 - x)} \phi (a + b \log{\frac{x}{1 - x}})$$
```

Avec les conditions suivantes : {{< math >}}$0 < x < 1, a > 0, b > 0, \phi${{< /math >}} étant la fonction normale de densité.

```math
$$johnsonsu.pdf(x;a,b) = \frac{b}{\sqrt{x^2 + 1}} \phi (a + b \log{(x + \sqrt{x^2 + 1})})$$
```

Avec les conditions suivantes : {{< math >}}$x > 0, a > 0, b > 0, phi${{< /math >}} étant la fonction normale de densité.

```math
$$burr.pdf(x;c,d) = \frac{cd}{x^{c+1} (1 + x^{-c})^{d+1}}$$
```

Avec la condition suivante : {{< math >}}$x > 0${{< /math >}}.

```math
$$bradford.pdf(x;c) = \frac{c}{k(1 + cx)}$$
```

Avec les conditions suivantes : {{< math >}}$0 < x < 1, c > 0, k = \log{1 + c}${{< /math >}}

```math
$$pareto.pdf(x;b) = \frac{b}{x^{b + 1}}$$
```

Avec les conditions suivantes : {{< math >}}$x \ge 1, b \gt 0${{< /math >}}

Toutes ces fonctions se basent sur une variable aléatoire notée *rv* (random variable). Voici un exemple d'illustration pour la fonction de Cauchy

```python
from scipy.stats import cauchy
rv = cauchy()
rv
```

On peut obtenir une distribution ainsi : `rv.dist`.

Grace à cet objet, on peut créer un graphique :

```python
from numpy import linspace
x = np.linspace(-10, 10, 101)
import matplotlib.pyplot as plt
f = plt.plot(x, rv.pdf(x))
```

L'exemple restera similaire avec les autres méthodes.

Pour la création du *linspace*, on peut utiliser des gardes-fous permettant de s'assurer que l'on reste dans les limites de définition de la fonction `x = linspace(np.maximum(rv.dist.a, -10), np.minimum(rv.dist.b, 10), 101)`.

Ainsi, `rv.dist.a` est le minimum de la distribution, tandis que `rv.dist.b` en est le maximum. Dans notre cas, il s'agit des infinis.

Voici le graphique obtenu en réalisant ce code a l'aide de IPython Notebook, en le lançant avec la commande suivante :

```bash
ipython3 notebook --pylab inline
```

On peut également afficher le graphique cumulatif, en utilisant la fonction cdf (cumulative distribution function), en procédant ainsi :

```python
plt.plot(x, cauchy.cdf(x))
```

Citons également deux autres fonctions qui peuvent trouver leur utilité :

```python
plt.plot(x, rv.logpdf(x))
plt.plot(x, rv.logcdf(x))
```

Enfin, pour terminer, voici comment obtenir l'intervalle qui regroupe un pourcentage donne de la distribution :

```python
cauchy.interval(.01)
cauchy.interval(.20)
cauchy.interval(.50)
cauchy.interval(.80)
cauchy.interval(.99)
```

## Interpolation et regression linéaire

Lorsque l'on réalise des mesures, on obtient des points que l'on est capable de placer sur un graphique. L'objectif de l'interpolation est de relier tous les points de cette courbe. Pour réaliser cette tache, nous disposons d'un module scipy.interpolate

Pour les besoins de ce chapitre, nous allons utiliser une simple fonction cosinus, de manière à ne pas complexifier inutilement la demonstration et aller à l'essentiel qui est non pas l'etude d'une fonction, mais comment utiliser les outils de SciPy.

On va donc commencer par créer un échantillon de données pour les besoins de tout le chapitre. On va partir de la fonction théorique `cosinus`, puis on va ajouter des interferences a l'aide de `randn` pour simuler un bruit dans la mesure.

```python
from numpy import arange, cos, pi, random, array
x = arange(0, 2\*pi, pi/4)
y_true = cos(x)
y_noise = random.randn(len(x)) / 2
y_measure = y_true + y_noise
```

On vient ainsi d'obtenir `y_measure`, qui est la simulation d'une mesure réelle effectuée à l'aide d'instruments et sur laquelle nous allons pouvoir travailler a partir de maintenant. Vous aurez noté, au passage, la faible résolution de notre échantillon (uniquement 9 points).

Nous allons présenter la manière de réaliser une interpolation entre ces points, c'est-à-dire de les relier. La manière par défaut est de les relier de manière linéaire. Voici un exemple :

```python
from scipy.interpolate import interp1d
f1 = interp1d(x, y_measure)
f2 = interp1d(x, y_measure, kind='cubic')
xnew = arange(0, 11/6\*pi, pi/12)
plt.plot(x, y_measure, 'o', xnew, f1(xnew), '-', xnew, f2(xnew), '--')
plt.legend(['data', 'linear', 'cubic'], loc='best')
```

Le résultat ici n'a rien a voir avec la réalité de la fonction cosinus, mais attention, ceci n'est pas l'objectif de l'interpolation ! Si l'on veut faire ceci, il faut faut plutôt utiliser des méthodes de regression linéaire.

L'objectif de la regression linéaire est de décrire la courbe representee par les points obtenus d'une mesure (ici `y_measure`) à l'aide d'une fonction linéaire qui soit la plus proche possible de chaque point, sans forcement passer par ces derniers. Pour cela, il s'agit de determiner la meilleure approximation de fonction possible et plusieurs méthodes existent.

Une des méthodes les plus communes est la méthode des moindres carres (least squares). Elle se trouve, avec d'autres telles que la méthode de Nelder-Mead ou l'algorithme BFGS (Broyden-Fletcher-Goldfarb-Shanno), dans le module *scipy.optimize*. C'est celle que nous allons presenter ici.

Voici un exemple d'utilisation de cette fonction, laquelle nous permet d'obtenir une courbe relativement moins precise (cela est d'autant plus evident que l'on a moins de points)

```python
from scipy.optimize import leastsq
def residuals(p, y, x):
err = y - cos(p[0] \* x + p[1])
return err

def peval(x, p):
return cos(p[0] \* x + p[1])

p0 = [1, 0]
plsq = leastsq(residuals, p0, args=(y_measure, x))
plsq[0]
```

Il ne reste plus qu'a dessiner le graphique ainsi obtenu, ainsi que les points de la mesure et le graphique théorique, afin de visualiser la difference

```python
plt.plot(x, peval(x, plsq[0]), '\*', x, y_measure, 'o', x, y_true)
plt.title('Illustration de la méthode des moindres carrés')
plt.legend(['Ajuste', 'Mesure', 'Théorique'])
```

Il est nécessaire de preciser ici que les differences entre la courbe ajustée à l'aide des moindres carrés et la courbe théorique est ici tres visible parce que l’échantillon de données est tres faible. Avec un échantillon de données plus grand, donc une mesure plus precise, les erreurs introduites ici aléatoirement se compenseraient mieux et les deux courbes seraient alors logiquement beaucoup plus proches. Vous pourrez tester avec ceci :

```python
x = arange(0, 2*pi, pi/16)
```

Il existe également un module *scipy.odr* (Orthogonal Distance Regression), qui offre une alternative à la méthode des moindres carrés ordinaire.

Pour commencer, il faut choisir selon quel modèle on veut réaliser notre approximation.

Dans notre exemple, on choisit un polynôme de troisième degré :

```python
from scipy.odr import models
func = models.polynomial(3)
```

Ensuite, il faut charger les donnees de base et utiliser le module scipy.odr ainsi :

```python
from scipy.odr import odrpack as odr
mydata = odr.Data(x, y_measure)
myodr = odr.ODR(mydata, func, maxit=250)
myodr.set_job(fit_type=2)
fit = myodr.run()
```

Cet objet fit contient l'approximation désirée (ainsi que des donnees sur les marges d'erreur). Il ne nous reste plus qu'à construire le polynôme à l'aide de la fonction `poly1d` présentée dans l'article sur NumPy, et le dessiner :

```python
f = np.poly1d(fit.beta[::-1])
plt.plot(x, y_measure, 'o', x, f(x), '-')
plt.legend(['data', 'ord'], loc='best')
```

Pour cet exemple-la comme pour les précédents, l'approximation est meilleure avec un échantillonnage plus élevé.

## Conclusion

La souplesse du langage Python, sa lisibilité, sa facilite d'apprentissage, le fait qu'il soit un langage pérenne, qui continue d’évoluer (et d’évoluer dans le bon sens), en font un choix efficace et surtout sûr. Grace a cela, les scientifiques qui ne sont pas forcement des spécialistes de la programmation, et n'ont pas vocation à l’être, peuvent apprendre Python l'esprit tranquille, en sachant que cet apprentissage ne sera pas perdu et qu'il ne sera pas nécessaire d'en apprendre un autre dans 10 ans.

Comme on l'a vu dans cet article, SciPy est réellement une bibliothèque gigantesque et dispose de ce que tout scientifique a besoin. Elle est également largement extensible. Elle respecte la philosophie de Python, en particulier en réutilisant intelligemment des modules écrits en FORTRAN au lieu de les réécrire, par exemple, profitant ainsi de l’énorme experience acquise ailleurs et en la capitalisant.

Elle offre également tous les outils nécessaires pour que celui qui utilise deja MATLAB ou un autre outil de calcul scientifique puisse passer sous SciPy sans avoir a payer un coût de migration exorbitant.

L'ensemble fait que SciPy est réellement la bibliothèque de référence pour le calcul scientifique, en partenariat avec NumPy et Matplotlib.
