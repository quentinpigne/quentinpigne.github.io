---
title: "Bases du langage"
weight: 1
tags: ["python"]
---

## Variables

### Types

* Integer `1234`
* Float `3.14`
* String `'string'` ou `"string"`
* Boolean `True` et `False`

En Python, le type *null* est `None`.

###### Méthodes utiles pour convertir les types

* `int()` : conversion en Integer
* `float()` : conversion en Float
* `str()` : conversion en String

### Déclaration d'une variable

En Python les variables ont un typage faible et peuvent changer de type à volonté.

```python
maVariable = "Chaine de caractères"
```

###### Inclusion de variable dans une string :

* Concaténation :

```python
variable = "World"
"Hello, " + variable + " !" # str(variable) si besoin de convertir
```

* Opérateur "%" :

  * `%s` pour les strings
  * `%d` pour les nombres

```python
variable1 = "My"
variable2 = "World"
"Hello, %s %s !"%(variable1, variable2)
```

* Fonction `format()` :

```python
variable = "World"
"Hello, {} !".format(variable)
```

* f-string (Python >= 3.6) :

```python
variable = "World"
f"Hello, {variable} !"
```

### Entrées/Sorties
`print()` affiche une chaîne de caractères à l'écran

`input()` récupère une entrée utilisateur (ne garde pas de saut de ligne de fin)

```python
nom = input()
print(f"Bonjour {nom} !")
```

## Commentaires

* Commentaires sur une ligne

En Python, un commentaire sur une ligne est défini par le caractère `#`.

```python
# Ceci est un commentaire
```

* Commentaires sur plusieurs lignes

Il est possible de définir un bloc de commentaires pouvant tenir sur plusieurs lignes en l'entourant de `"""`.

```python
"""
Ceci est un bloc de commentaires
pouvant tenir sur plusieurs lignes.
"""
```

## Conditions

### Bloc if-elif-else

```python
if <condition>:
  instruction
elif <condition>:
  instruction
else:
  instruction
```

Il est possible de combiner les conditions avec `and`, `or` et `not`.

### Ternaire

En Python, les conditions ternaires s'écrivent avec un `if` et un `else` sur une ligne :

```python
result = "ok" if a < b else "ko"
```

## Boucles

### Boucle `while`

```python
while test:
  handle_true()
else:
  handle_false() # Run if didn't exit loop with break
```

### Boucle `for`

```python
for x in range(5): # range(5) = 0, 1, 2, 3, 4
  print(x)
```

### Opérations sur les boucles

* Ne rien faire

L'opérateur `pass` ne fait rien. Il permet d'indiquer explicitement au programme qu'il ne doit rien se passer.

```python
for x in range(5):
  if x == 3:
    pass
  else:
    print(x)
```

* Arrêter la boucle

L'opérateur `break` permet de sortir d'une boucle.

```python
for x in range(5):
  if x == 3:
    break
```

* Sauter une itération

L'opérateur `continue` permet de passer directement à l'itération suivante.

```python
for x in range(5):
  continue if x == 3
  print(x)
```

## Listes et tuples

###### Listes

* Déclaration d'une liste et accès à un élément

```python
tableau = [1, 2, '3', '4'] # Un tableau peut contenir des éléments de types différents
print(tableau[0]) # 1
```

```python
tableau = list(1, 2, '3', '4')
print(tableau[0]) # 1
```

{{< figure src="https://user.oc-static.com/upload/2021/07/05/16254683020359_1C5.png" >}}

* Ajout d'un élément à un tableau

Pour ajouter un élément à un tableau, trois méthodes sont disponibles : `append` pour ajouter un élément, `insert` qui ajoute un élément à un index précis et enfin `extend` qui permet d'ajouter une liste d'éléments.

```python
tableau.append('5')
tableau.insert(1, '6')
tableau.extend(['7', '8'])
```

* Retrait d'un élément du tableau

Pour retirer un élément d'un tableau, trois méthodes sont disponibles : `remove` qui prend l'élément à supprimer, `pop` qui prend l'index de l'élément à supprimer ou supprime le dernier élément si non fourni et enfin `clear` qui supprime l'intégralité des éléments de la liste.

```python
num = ['one', 'two', 'three', 'four']
num.remove('one') # ['two', 'three', 'four']
num.pop() # ['two', 'three']
num.clear() # []
```

* Connaître la taille d'un tableau

La méthode `len()` permet de connaître le nombre d'éléments présents dans un tableau.

```python
tableau = [1, 2, 3, 4]
print(len(tableau)) # 4
```

* Trier un tableau

La méthode `sort()` permet de trier un tableau par ordre croissant.

```python
tableau = [2, 3, 1, 4]
print(tableau.sort()) # [1, 2, 3, 4]
```

{{% notice info %}}
De nombreuses autres méthodes utiles aux tableaux sont présentées dans [la documentation officielle](https://docs.python.org/fr/3/tutorial/datastructures.html).
{{% /notice %}}

###### Tuples

Les tuples sont des structures de données similaires aux tableau à la différence qu'ils sont immutables, contrairement aux tableau qui, eux, peuvent être modifiés.

Ils se déclarent entre parenthèses `()`.

```python
mon_tuple = (1, 2)
```

## Dictionnaires

* Déclaration d'un dictionnaire et accès à un élément

```python
dico = {
  'key': 'value'
}
print(dico['key']) # value
print(dico['inexistingKey']) # => KeyError
```

Il est aussi possible d'utiliser la fonction `dict()` :

```python
dico = dict(
  key: 'value'
)
print(dico['key']) # value
print(dico['inexistingKey']) # => KeyError
```

* Ajout d'un élément dans un dictionnaire

```python
dico['otherKey'] = 'otherValue'
```

* Suppression d'un élément d'un dictionnaire

Pour supprimer un élément d'un dictionnaire, il suffit d'utiliser le mot-clé `del` en précisant l'élément à supprimer.

```python
dico = dict(
  key: 'value'
)
del dico['key']
```

* Vérification de l'existence d'une clé

Il est possible d'utiliser le mot-clé `in` pour tester l'existance d'une clé dans un dictionnaire.

```python
dico = dict(
  key: 'value'
)
if 'key' in dico:
  print(dico['key'])
```

## Fonctions

* Définir une fonction

```python
def add(a, b):
  return a + b
```

En l'absence d'instruction **return**, une fonction renverra toujours `None`.

###### Retour multiple

En Python, il est possible de retourner plusieurs valeurs d'une fonction. Il suffit de les séparer par des virgules et le retour est ainsi récupérable sous forme de tuple.

```python
def testFunc(num1, num2):
  return num1, num2

a, b = testFunc(5, 10)
```

###### Paramètres nommés

```python
def testFunc(num1, num2):
  return num1, num2

a, b = testFunc(num1=5, num2=10)
```

###### Paramètres optionnels

Il est possible de rendre un paramètre optionnel en précisant sa valeur par defaut

```python
def testFunc(num1, num2=10):
  return num1, num2

a, b = testFunc(5)
```

###### Liste de paramètres

```ruby
def nom_fonction(*args)
  print(type(args)) # <class 'tuple'>
```

Il est toujours possible de passer des paramètres "isolés" en les mettant avant la liste.

### Lambda

Python supporte les fonctions anonymes, aussi appelées *lambda*.

```python
lambda arguments: expression
```

## Lire et écrire des fichiers

###### Ouverture et fermeture d'un fichier

En Python, il est possible d'ouvrir un fichier en lecture ou en écriture avec la méthode `open()`.

```python
f = open("myfile.csv")
```

Il est possible de préciser le mode dans lequel on souhaite ouvrir le fichier.

```python
f = open("myfile.csv") # This is the same as “rt” mode.
f = open("myfile.csv", "w") # write in text mode
f = open("myimage.png", "r+b") # read and write in binary mode
```

Voici la liste des options possibles :

| Option | Description                                              |
|--------|----------------------------------------------------------|
| "r"    | read mode (default)                                      |
| "w"    | write mode                                               |
| "x"    | exclusive creation (fails if file already exists)        |
| "t"    | text mode (default)                                      |
| "b"    | binary mode                                              |
| "a"    | appending data at the end (create file if doesn't exist) |
| "+"    | update file (reading and writing)                        |

Après utilisation, il est nécessaire de fermer le fichier à l'aide de la méthode `close()`.

```python
f = open("myfile.csv")
f.close()
```

###### Syntaxe raccourcie pour l'utilisation d'un fichier

Le mot-clé `with` permet d'ouvrir un bloc dans lequel un fichier est ouvert au automatiquement fermé à la fin.

```python
with open("myfile.csv") as f:
  <instructions>
```

###### Lecture d'un fichier

* Lecture complète sous forme de texte

La méthode `read()` permet de lire l'entièreté d'un fichier sous la forme d'un string.

```python
with open("myfile.csv") as f:
  content = f.read()
```

{{% notice info %}}
La méthode `read()` retourne une ligne vide quand elle arrive à la fin du fichier. Pour la supprimer il est possible d'utiliser la méthode `rstrip()`
{{% /notice %}}

* Lecture ligne par ligne

Il est possible de parcourir un fichier ligne par ligne en itérant dessus avec une boucle `for`

```python
with open("myfile.csv") as f:
  for line in f:
    print(line)
```

{{% notice info %}}
Comme précédemment, cette méthode retourne une ligne vide après chaque ligne lue. Pour la supprimer il est possible d'utiliser la méthode `rstrip()`
{{% /notice %}}

* Récupération du contenu sous forme de liste

La méthode `readlines()` permet de récupérer l'entièreté des lignes du fichier sous forme de liste.

```python
with open("myfile.csv") as f:
  lines = f.readlines()
```

###### Écriture dans un fichier

La méthode `write()` permet d'écrire une ligne dans un fichier.

```python
with open("myfile.csv") as f:
  f.write("new line")
```

{{% notice info %}}
La méthode `write()` n'ajoute pas de retour à la ligne en fin de texte. Il est nécessaire, si besoin, d'ajouter manuellemenet un **\n**.
{{% /notice %}}
