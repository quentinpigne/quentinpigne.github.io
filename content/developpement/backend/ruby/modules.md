---
title: "Modules, namespaces et mixins"
weight: 3
tags: ["ruby"]
---

## Les modules

* Définition et création

Il est possible de créer un module avec le mot-clé `module`.

Un module fonctionne un peu comme une classe. À la différence qu'il ne peut ni être instancié ni hérité. Il peut en revanche contenir des constantes, des variables, des méthodes (toujours avec `self`) ou des classes.

```ruby
module MonModule
  MA_CONSTANTE = 1

  def self.une_methode()
    ...
  end

  class MaClasse
    ...
  end
end
```

* Inclusion de modules tiers

Tous les modules ne sont pas inclus par defaut, il est possible d'inclure des modules tiers avec le mot-clé `require`.

```ruby
require 'date'
```

{{% notice info %}}
L'inclusion avec le mot-clé `require` ne concerne que le gems installées globalement. Pour inclure un fichier dont le chemin est relatif au fichier courant, il faut utiliser le mot-clé `require_relative`.
{{% /notice %}}

```ruby
require_relative 'fichier_local'
```

## Namespaces

Pour éviter les doublons de classes ou de méthodes, il est possible d'utiliser les modules comme des **namespaces**. Les classes et méthodes d'un module sont accessibles dans un autre module avec la syntaxe `<NomModule>::`. (Fonctionnement similaire aux namespaces C++)

Le but des namespaces est de regrouper les classes liées à une même logique.

## Mixins

Le système de module permet aussi de faire de l'héritage "horizontal" car ils peuvent être inclus dans une class.

```ruby
module Feature
  def une_fonction_liee_a_la_feature
    ...
  end
end

class MaClasse
  include Feature
  ...
end

objet = MaClass.new
puts objet.une_fonction_liee_a_la_feature
```

Inclure un module dans une classe greffe automatiquement toutes les méthodes d'instance qui sont dans le module, au niveau de la classe.

* Méthode `included`

Les modules ont tous une méthode de classe `included`. Si on la définit, cela permet de capturer à chaque fois qu'une module est inclus dans un sous-module ou dans une classe.

```ruby
module Feature
  def self.included(base) # base = classe dans laquelle le module est inclus
    puts base
  end
end
```

Il est ainsi possible de modifier la classe dynamiquement à l'inclusion d'un module :

```ruby
module Feature
  def self.included(base) # base = classe dans laquelle le module est inclus
    def base.une_nouvelle_methode
      ...
    end
  end
end
```

* `extend` au lieu de `include`

`extend` transfère les méthodes d'instance en méthode classe.

```ruby
module Feature
  def une_methode
    ...
  end
end

class MaClasse
  extend Feature
  ...
end

puts MaClass.une_methode
```

`extend` peut aussi être appelé depuis une instance de classe :

```ruby
module Feature
  def une_methode
    ...
  end
end

class MaClasse
  ...
end

objet = MaClasse.new
objet.extend(Feature)
puts objet.une_methode
```

Cela a pour effet de rajouter les méthodes du mixin dans l'instance, mais uniquement pour cette instance.

De la même manière que `include` a un hook `included` permettant de capturer quand un module est inclus dans une classe. Il existe un hook `extended` qui permet de capturer quand un module est étendu par une classe.
