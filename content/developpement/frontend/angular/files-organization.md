---
title: "Organisation des fichiers"
weight: 2
tags: ["angular"]
---

```
src
+-- app
|   +-- modules
|   |   +-- home
|   |   |   +-- components
|   |   |   |   +-- ...
|   |   |   +-- pages
|   |   |   |   +-- ...
|   |   |   |   home.routing.module.ts
|   |   |   |   home.module.ts
|   +-- core
|   |   +-- shell
|   |   |   +-- components
|   |   |   |   +-- header
|   |   |   |   |   header.component.[ts|spec.ts|html|scss]
|   |   |   |   +-- footer
|   |   |   |   |   footer.component.[ts|spec.ts|html|scss]
|   |   |   |   shell.module.ts
|   |   |   |   shell.component.[ts|spec.ts|html|scss]
|   |   +-- authentication
|   |   +-- services
|   |   +-- ...
|   |   |   core.module.ts
|   +-- shared
|   |   +-- componentes
|   |   +-- directives
|   |   +-- pipes
|   |   |   shared.module.ts
|   |   app.module.ts
|   |   app-routing.module.ts
|   |   app.component.ts
|   |   app.component.spec.ts
|   |   app.component.scss
|   |   app.component.html
+-- assets
+-- environments
|   |   environment.prod.ts
|   |   environment.ts
|   index.html
|   main.ts
|   polyfills.ts
|   styles.scss
|   test.ts
```

## Modules
Les modules sont un groupements de pages similaires fonctionnellement. Ils servent au découpage de l'application en vue du Lazy-loading

## Pages
Les pages sont un groupements de composants dont l'organisation est calqué sur la navigation. A chaque page correspond une route au niveau du RoutingModule

## Composants
Un composant est une unité atomique représentant un élément d'une page
