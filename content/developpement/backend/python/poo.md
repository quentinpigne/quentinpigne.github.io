---
title: "Programmation Orientée Objet"
weight: 2
tags: ["python", "poo"]
---

## Classes

###### Création et instanciation d'une classe

Un classe se crée à l'aide du mot clé `class` puis s'instancie en utilisant directement son nom.

```python
class MaClasse:
  ...

object = MaClasse()
```

###### Variables d'instance et constructeur

Contrairement à d'autres langages, en Python, les attributs n'ont pas besoin d'être déclarés en avance. Ils peuvent simplement être définis au niveau du constructeur, lui-même définit avec la méthode `__init__`.

```python
class MaClasse:
  def __init__(self, var1, var2 = "value2")
    self.var1 = var1
    self.var2 = var2

object = MaClasse(var1 = "value1")
```

###### Méthodes d'instance

Les méthodes d'instance se définissent au sein de la classe comme des méthodes classiques et suivent les même conventions.

{{% notice info %}}
En Python, les méthodes d'instance incluent **toujours** en 1er paramètre l'instance de la classe, noté par convention `self`. Il n'y a pas de *this* "implicite".
{{% /notice %}}

```python
class MaClasse:
  def une_methode(self):
    <instructions>

object = MaClasse()
object.une_methode()
```

Il est possible d'appeler une autre méthode d'instance depuis une méthode à l'aide de `self` :

```python
class MaClasse:
  def une_methode(self, var):
    <instructions>

  def une_autre_methode(self):
    <instructions>
    self.une_methode(var)
    <instructions>
```

###### Méthodes privées

Python n'a pas de notion de scope et donc de méthodes ou d'attributs privés. Cependant, par convention les attributs et méthodes commençant par un underscore (`_`) sont considérés comme privés.

```python
class MaClasse:
  def __init__(self):
    _attribut_prive = 1

  def _methode_privee(self):
    <instructions>
```
