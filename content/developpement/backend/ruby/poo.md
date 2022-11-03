---
title: "Programmation Orientée Objet"
weight: 2
tags: ["ruby", "poo"]
---

## Classes

###### Création et instanciation d'une classe

Un classe se crée à l'aide du mot clé `class` puis s'instencie avec la méthode `new`.

```ruby
class MaClasse
  ...
end

object = MaClasse.new
puts object.inspect #<MaClasse:id>
```

###### Variables d'instance et constructeur

En Ruby, les variables d'instance sont symbolisées par un **@** et sont définit directement au niveau du constructeur, lui-même définit avec la méthode `initialize`.

```ruby
class MaClasse
  def initialize(var1, var2)
    @var1 = var1
    @var2 = var2
  end
end
```

###### Méthodes d'instance

Les méthodes d'instance se définissent au sein de la classe comme des méthodes classiques et suivent les même conventions. (nommage, *?* si renvoie booléen, *!* si modifie l'objet...)

```ruby
class MaClasse
  def une_methode
    <instructions>
  end
end

object = MaClasse.new
object.une_methode
```

Il est possible d'appeler une autre méthode d'instance depuis une méthode comme on appellerait une fonction depuis l'exterieur de la classe. (Pas de `this`)

```ruby
class MaClasse
  def une_methode(var)
    <instructions>
  end

  def une_autre_methode
    <instructions>
    une_methode(var)
    <instructions>
  end
end
```

###### Setter et Getter

* Methode naïve

```ruby
class MaClasse
  def initialize(var)
    @var = var
  end

  def var()
    @var
  end

  def var=(var)
    @var = var
  end
end

object = MaClasse.new
object.var = "test"
puts object.var
```

* Utilisation de `attr_accessor`, `attr_reader` et `attr_writer`

```ruby
class MaClasse

  attr_accessor :var

  def initialize(var)
    @var = var
  end
end

object = MaClasse.new
object.var = "test"
puts object.var
```

Ces 3 méthodes sont en fait des méthodes de classes qui permettent de créer les getter et setter qui est appelée statiquement à l'intérieur de la classe.

###### Méthodes privées

Les méthodes privées doivent être déclarées après le mot-clé `private`. Elles restent accessibles à l'intérieur de la classe.

```ruby
class MaClasse
  private

  def une_methode(var)
    <instructions>
  end
end
```

###### Méthodes et Variables de classe

* Méthodes de classe

Les méthodes de classe ne sont pas rattachées à une instance de la classe et se déclarent avec le mot-clé `self`.

```ruby
class MaClasse
  def self.methode_classe
    <instructions>
  end
end

puts MaClasse.methode_classe
```

Pour appeler une méthode de classe depuis une méthode d'instance, il faut utiliser `self.class.<nom_methode>`.

```ruby
class MaClasse
  def self.methode_classe
    <instructions>
  end

  def une_methode
    self.class.methode_classe
  end
end
```

* Variables de classe

Les variables de classe se déclarent avec `@@`. Dans les méthodes de classe ou d'instance, on accède toujours aux variables de classe directement.

```ruby
class MaClasse
  @@variable_classe = 'test'

  def self.methode_classe
    "#{@@variable_classe}"
  end

  def une_methode
    "#{@@variable_classe}"
  end
end

puts MaClasse.methode_classe
```

###### Ouverture des classes

En Ruby, les classes restent toujours ouvertes, il est donc possible de les modifier après leur déclaration.

Soit en créant une méthode de classe à l'exterieur de celle-ci :

```ruby
class MaClasse
  def une_methode
    <instructions>
  end
end

def MaClass.methode_classe
  <instructions>
end
```

Soit en réutilisant la même déclaration :

```ruby
class MaClasse
  def une_methode
    <instructions>
  end
end

class MaClasse
  def self.methode_classe
    <instructions>
  end
end
```

Il est ainsi possible de "modifier" les méthodes internes à Ruby comme les méthodes de la classe `String` par exemple...

###### Méthodes "spéciales" et opérateurs

* methode `class`

La méthode `class`, appelée sur un objet, renvoie le Class de cet objet.

```ruby
s = "Ceci est un texte"
s.class # String
```

* `<` et `>`

Il est possible d'implémenter les opérateurs de supériorité et d'infériorité sur des objets en définissant ces méthodes qui prennent chacune l'élément sur lequel s'applique la comparaison :

```ruby
class MaClass
  def <(elem)
    <instructions>
  end
end
```

## L'héritage

L'héritage se fait en Ruby avec le symbole `<`.

```ruby
class BaseClass
  ...
end

class HeritedClass < BaseClass
  ...
end
```

Ainsi, *HeritedClass* "hérite" de toutes les méthodes et tous les attributs de *BaseClass*. Et il est aussi possible d'en ajouter de nouveaux ou de les surcharger. Dans ce cas, la méthode parente est accessible via le mot-clé `super`.

{{% notice warning %}}
En Ruby, `super` correspond bien à la **méthode** parente et non à l'objet parent. De plus, utiliser `super` **appelle** la méthode (par défaut, avec les même paramètres que la méthode surchargée).
{{% /notice %}}

```ruby
class HeritedClass < BaseClass
  def method(param)
    method_value = super # équivalent : method_value = super(param)
    other_method_value = super(other_param)
    ...
  end
end
```

{{% notice info %}}
De la même manière que la méthode `class`, appeler `class.superclass` donne des informations sur la classe de base. Si on remonte dans la hiérarchie, toutes les classe de base héritent de `Object` qui, elle-même, hérite de `BaseObject`.
{{% /notice %}}

## Les exceptions

* Lancement d'une exception

En Ruby, une exception se lève avec la méthode `raise`.

```ruby
def method
  raise if error # unhandled exception
  raise "Il y a une erreur" if error # RuntimeError avec message
  raise SpecificError "Il y a une erreur" if error # SpecificError avec message
end
```

* Capture d'une exception

Une exception peut être capturer entre un `begin` et un `rescue` (qui prend en paramètre le type d'exception qu'on veut capturer) :

```ruby
begin
  method
rescue SpecificError => e
  puts e.to_s
end
```

* Execution de code même si erreur

Le mot-clé `ensure` permet d'exécuter du code même si une exception a été capturée :

```ruby
begin
  method
rescue SpecificError => e
  puts e.to_s
ensure
  <instructions>
end
```

* Créer une classe d'erreur

```ruby
class MonErreur < RuntimeError
  def initialize(msg = "Message par défaut")
    super
  end
end

def method
  raise MonErreur if error
end
```

En général, on ne fait pas hériter les classes d'erreur de `RuntimeError` mais on crée une classe `Error` pour le module, qui hérite de `RuntimeError`, et ensuite les classes d'erreur héritent de cette `Error`. Cela permet de capturer en une seule fois toutes les erreurs possibles pour le module en question au niveau du `rescue` :

```ruby
module MonModule
  class Erreur < RuntimeError
  end

  class PremiereErreur < Erreur
    def initialize(msg = "Message par défaut")
      super
    end
  end

  class DeuxiemeErreur < Erreur
    def initialize(msg = "Message par défaut")
      super
    end
  end

  def method
    raise PremiereErreur if error1
    raise DeuxiemeErreur if error2
  end
end

begin
  MonModule::method
rescue MonModule::Erreur => e
  puts e.to_s
end
```
