---
title: "Vues et manipulations du DOM"
weight: 3
tags: ["angular", "dom", "view"]
---

## Vues en Angular

En Angular, une vue (`View`) est le plus petit groupe d'éléments qui sont créés et détruits ensemble et dont le rendu est défini par une ou plusieurs directives. La philosophie d'Angular encourage les dévelopeurs à voir l'application comme une composition de vues, et non un assemblage d'éléments HTML.

Une vue est définie par une classe `Component` et son template associé. Elle est représentée par une instance de `ViewRef` associée à un composant. Une vue qui est directement issue d'un composant est appelée `HostView`. Une hiérarchie de vues est ainsi établie.

Les propriétés des éléments d'une vue peuvent être modifiées dynamiquement (suite à une action utilisateur par exemple). Cependant la structure (leur nombre et leur ordre) des éléments d'une vue ne peut pas changer. Il est possible de modifier la structure des éléments en insérant, déplaçant ou supprimant des vues imbriquées à l'intérieur de conteneurs de vues spécifiques.

Les hiérarchies de vues sont chargées et déchargées dynamiquement en naviguant dans l'application, sous le contrôle du routeur.

### Hiérarchie de vues

L'assemblage de vues associées défini une arborescence sur lesquelles il est possible d'agir. La vue racine est référencée en tant que *host view* d'un composant. Une *host view* est la racine d'une arborescence de *embedded views*, collecté dans un conteneur de vue `ViewContainerRef` attaché à un élément d'ancrage dans le composant hôte. La hiérarchie des vues est un élément clé de la détection des changements en Angular.

L'arborescence de vues n'implique pas d'arborescence de composants. Les *embedded views* dans le contexte d'une arborescence particulière peuvent être des *host views* d'autres composants. Ces composants peuvent être dans le même NgModule que le composant hôte, ou appartenir à d'autres NgModules.

### ViewRef

`ViewRef` est une classe abstraite représentant une vue Angular.
Angular supporte 2 types de vues :

- les `EmbeddedView` qui sont liées à un `Template`
- les `HostView` qui sont liées à un `Component`

## Références

- [https://indepth.dev/posts/1052/exploring-angular-dom-manipulation-techniques-using-viewcontainerref](https://indepth.dev/posts/1052/exploring-angular-dom-manipulation-techniques-using-viewcontainerref)
- [https://indepth.dev/posts/1134/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques](https://indepth.dev/posts/1134/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques)
