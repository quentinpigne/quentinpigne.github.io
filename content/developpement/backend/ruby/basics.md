---
title: "Bases du langage"
weight: 1
tags: ["ruby"]
---

## Variables

### Types

* Integer `1234`
* String `'string'`
* Boolean `true`et `false`

###### Méthodes utiles pour convertir les types

* to_i : conversion en Integer
* to_s : conversion en String

###### Vérifier qu'une variable est d'un certain type

En Ruby, on vérifie rarement le type d'une variable, on utilise plutôt la méthode `respond_to?` afin de vérifier qu'on puisse lui appliquer une certaine méthode.

```ruby
def toUp(text)
  if text.respond_to?(:to_s)
    text.to_s.upcase
  end
end
```

### Déclaration d'une variable

En Ruby les variables ont un typage faible et peuvent changer de type à volonté

```ruby
maVariable = 'Chaine de caractères'
```

Affichage variable dans une string :
```ruby
"Ceci est une chaine de caractères contenant une #{variable}"
```

Il est possible de déclarer des variables de manière globale en la plaçant en dehors de tout bloc et en utilisant le signe `$`

```ruby
$variableGlobale = "Hello, world !"
```

Et pour finir, il est possible de déclarer des constantes, en écrivant leur nom tout en majuscule.

```ruby
MA_CONSTANTE = 1
```

### Entrées/Sorties
`puts` affiche une chaîne de caractères à l'écran (avec saut de ligne)

`print` affiche une chaîne de caractères à l'écran (sans saut de ligne)

`gets` récupère une entrée utilisateur (garde le saut de ligne de fin)
utliser la méthode `chomp` pour supprimer le saut de ligne final

```ruby
nom = gets.chomp
puts "Bonjour #{nom} !"
```

## Commentaires

* Commentaires sur une ligne

En Ruby, un commentaire sur une ligne est défini par le caractère `#`.

```ruby
# Ceci est un commentaire
```

* Commentaires sur plusieurs lignes

Il est possible de définir un bloc de commentaires pouvant tenir sur plusieurs lignes à l'aide de `=begin` et `=end`.

```ruby
=begin
Ceci est un bloc de commentaires
pouvant tenir sur plusieurs lignes.
=end
```

## Conditions

### Bloc if-elsif-else

```ruby
if <condition>
  instruction
elsif <condition>
  instruction
else
  instruction
end
```

`unless condition` est équivalent à `if !condition`

Une condition if peut s'écrire sur une ligne

```ruby
puts "Condition vraie" if <condition>
puts "Condition fausse" unless <condition>
```

### Bloc case-when

```ruby
var = 1
case var
when 1
  puts "ok"
else
  puts "ko"
end
```

Il existe une version raccourcie :

```ruby
var = 1
case var
when 1 then puts "ok"
end
```

### Ternaire

En Ruby, les conditions ternaires s'écrivent comme dans tous les autres langages :

```ruby
puts a < b ? "ok" : "ko"
```

### Operateurs conditionnels

`||` renvoie la 1ère valeur si *truthy* et la 2ème sinon.

```ruby
a = false
b = "Salut"
puts a || b # Salut

a = "Hello"
puts a || b # Hello
```

* Affectation conditionnelle

```ruby
a = false
a ||= "Valeur par defaut"
puts a # Valeur par defaut

a = "Hello"
a ||= "Valeur par defaut"
puts a # Hello
```

## Boucles

### Boucle While

```ruby
while <condition> # until !<condition>
  ...
end
```

### Boucle For

```ruby
for num in 1..10 # 1..10 = [1, 10] et 1...10 = [1, 10[
  puts num
end
```

* Sauter une itération

```ruby
for num in 1..10
  next if num == 3
  puts num
end
```

### Boucle Loop (Infinie)

```ruby
loop do
  ...
  break if <condition>
end
```

## Tableaux

* Déclaration d'un tableau et accès à un élément

```ruby
tableau = [1, 2, '3', '4'] # Un tableau peut contenir des éléments de types différents
puts tableau[0] # 1
```

* Ajout d'un élément à un tableau

Pour ajouter un élément à un tableau, on peut utiliser la concaténation d'un autre tableau avec l'opérateur **+**, les chevrons (**<<**) ou la méthode **push**.

```ruby
tableau += ['5']
tableau << '6'
tableau.push '7'
```

* Retrait d'un élément du tableau

On utilise la méthode **pop** de la classe *Array*

```ruby
tableau.pop
```

* Méthodes `collect` et `map`

Ce sont deux fonctions identiques qui executent un bloc pour chaque élément d'un tableau et retournent le tableau resultant.

## Hash

* Déclaration d'un Hash et accès à un élément

```ruby
hash = { 'key' => 'value' }
puts hash['key'] # value
puts hash['inexistingKey'] # nil
```

Syntaxe plus moderne utilisant implicitement des symboles

```ruby
hash = { key: 'value' }
hash[:key] # value
puts hash[:inexistingKey] # nil
```

En utilisant le constructeur et en spécifiant une valeur par défaut

```ruby
hash = Hash.new(0)
puts hash[:inexistingKey] # 0
```

* Ajout d'un élément dans un Hash

```ruby
hash['otherKey'] = 'otherValue'
hash[:otherKey] = 'otherValue'
```

## Itérateurs

* Méthode **times**

```ruby
3.times do |num|
  puts num
end
```

* Méthode **each**

```ruby
array.each do |value|
  ...
end

hash.each do |key, value|
  ...
end
```

## Fonctions

* Définir une fonction

```ruby
def nom_fonction(param)
  return param
end
```

En l'absence d'instruction **return**, une fonction renverra le résultat de sa dernière instruction.

En Ruby, on ne teste pas le type d'un paramètre mais on tente directement de le caster.

### Conventions de nommage

Les caractères spéciaux sont autorisés dans les noms de fonction ainsi que les symboles comme '+', '-'... Traditionnellement, les fonctions possédant ces symboles implémentes les opérateurs correspondants.

* `?` : retourne un boolean
* `!` : modifie l'objet

### Paramètres optionnels

Il est possible de rendre un paramètre optionnel en précisant sa valeur par defaut

```ruby
def nom_fonction(param = "Valeur par defaut")
  return param
end
```

### Liste de paramètres

```ruby
def nom_fonction(*params)
  puts params.inspect
end
```

Il est toujours possible de passer des paramètres "isolés" en les mettant avant la liste.

## Procs et Blocs

### Blocs

###### Passer un bloc a une fonction

Un bloc peut être passé à une fonction à l'aide du mot-clé `yield`.

```ruby
def test
  puts "A first text"
  yield
  puts "A third text"
end

test { puts "A second text" }
```

Un bloc peut être appelé plusieurs fois en mettant plusieurs `yield` dans la fonction.

{{% notice warning %}}
A partir du moment où on met un `yield` dans une fonction, celle-ci va obligatoirement attendre un paramètre de type bloc.
{{% /notice %}}

###### Passer un paramètre à un bloc

Il est possible de passer un ou plusieurs paramètre(s) à `yield`. Ils seront automatiquement passés au bloc :

```ruby
def test
  puts "A first text"
  yield("A second text")
  puts "A third text"
end

test { |text| puts text }
```

La limite des blocs est qu'ils ne peuvent pas être sauvegardés dans des variables. Empêcher ainsi de pouvoir les réutiliser à plusieurs endroits.

### Procs

On peut voir les procs comme des blocs qu'on peut sauvegarder.

* Création d'un `Proc`

On peut créer un **Proc** avec `Proc.new` auquel on passe un bloc. Et on peut le sauvegarder dans une variable.

```ruby
var = Proc.new { <instructions> }
```

* Passage d'un `Proc` à une fonction

Pour être passé en tant que bloc à une fonction, un `Proc` doit être 'converti' en **bloc**. Cela se fait avec le signe `&`.

```ruby
monProc = Proc.new { <instructions> }
a = [1, 2, 3]
a.map!(&monProc)
```

* Appel direct d'un `Proc``

Il est possible d'appeler à n'importe quel moment un Proc en utilisant la méthode `call` :

```ruby
monProc = Proc.new { |param| <instructions> }
monProc.call("param")
```

* Récupérer dans une fonction un bloc sous forme de `Proc`

Il est possible de récupérer un bloc sous forme de `Proc` dans une fonction à l'aide du même signe `&` :

```ruby
def maFonction(&bloc) # ici, bloc est un Proc
  bloc.call("param")
end

maFonction { |param| <instructions> }
```

{{% notice info %}}
Contrairement aux blocs, il est possible de passer plusieurs `Proc` à une fonction !
{{% /notice %}}

### Lambda

En Ruby, un lambda est très similaire à un `Proc`.

Pour créer un lambda, il suffit de remplacer le `Proc.new` par `lambda` et lui passer un bloc.

```ruby
monLambda = lambda { |param| <instructions> }
puts monLambda.inspect # On se rend compte ici qu'un lambda est un Proc particulier
```

Il s'utilise ensuite de la même façon qu'un `Proc`.

###### Différences entre `Proc` et lambda

* Un lambda vérifie le nombre de paramètres fournis, alors que le Proc n'effectue aucune vérification sur les paramètres.
* Dans un lambda, le `return` retourne au sein du bloc, alors que dans un Proc, il le comprend comme un `return` "classique".

```ruby
def a_lambda
  a = lambda { return "Salut" }
  a.call # équivalent "Salut"
  return "Au revoir"
end

def a_proc
  a = Proc.new { return "Salut" }
  a.call # équivalent return "Salut"
  return "Au revoir"
end

a_lambda # Au revoir
a_proc # Salut
```

###### Nouvelle syntaxe du lambda

```ruby
monLambda = ->(<param>) { <instructions> }
```

###### Syntaxe raccourcie pour un appel de méthode sur chaque élément passé à un bloc

```ruby
a = ["1", "2", 3]
a.map! { |n| n.to_i } # Syntaxe "classique"
a.map!(&:to_i) # Syntaxe raccourcie
```
