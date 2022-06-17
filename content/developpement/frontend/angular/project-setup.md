---
title: "Mise en place d'un projet"
weight: 1
tags: ["angular"]
---

## Création du projet

Un projet Angular peut se présenter sous deux structures différentes. Une structure "classique" qui ne comprend qu'un unique projet ou bien un workspace pouvant contenir plusieurs applications ou librairies (aussi appelé "monorepo")

* Structure 'classique'

```bash
ng new [application-name] --routing --style scss --prefix [prefix]
```

* Workspace vide + application (monorepo)

```bash
ng new [project-name] --create-application false
ng generate application [application-name] --routing --style scss --prefix [prefix]
```

{{% notice info %}}
Si le projet est créé dans un dépôt Git existant, il faut utiliser l'option `--skip-git` afin de spécifier au CLI d'Angular de ne pas initialiser de dépôt Git.

Il peut aussi être utile de spécifier le package manager à utiliser à l'aide de l'option `--package-manager`.

Dans des cas plus rares, l'option `--new-project-root` permet de spécifier le nom du dossier dans lequel les nouvelles applications devront être générées.
{{% /notice %}}

## Ajout d'[ESLint](https://eslint.org/) et de [Prettier](https://prettier.io/)

* Installation d'ESLint

Il est possible d'ajouter facilement ESLint à un projet Angular en executant le schematic fourni :

```bash
ng add @angular-eslint/schematics
```

Cela aura pour effet d'installer les dépendances nécessaires et créer le(s) fichier(s) de configuration associé(s).

* Installation de Prettier

1. Commencer par installer la package prettier ainsi que les deux plugins nécessaires à son intégration avec ESLint
```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

2. Créer un fichier `.prettierrc.json` à la racine du projet
```json
{
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "overrides": [
    {
      "files": ".editorconfig",
      "options": { "parser": "yaml" }
    }

  ]
}
```

* Exemple de configuration ESLint pour workspace multi-projets

{{< tabs >}}
{{% tab name="racine" %}}
```json
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      "rules": {}
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ]
}
```
{{% /tab %}}
{{% tab name="projet" %}}
```json
{
  "extends": "../../.eslintrc.json",
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": [
          "./tsconfig.lib.json",
          "./tsconfig.spec.json"
        ]
      },
      "rules": {
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@angular-eslint/no-output-native": "off",
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "ui",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": ["element", "attribute"],
            "prefix": "ui",
            "style": "kebab-case"
          }
        ]
      }
    }
  ]
}
```
{{% /tab %}}
{{< /tabs >}}

## Ajout de [Stylelint](https://stylelint.io/)

1. Commencer par installer la package stylelint ainsi que sa configuration standard
```bash
npm install --save-dev stylelint stylelint-config-standard
```

2. Créer un fichier `.stylelintrc.json` à la racine du projet
```json
{
  "extends": "stylelint-config-standard"
}
```

## Ajout de [Commitlint](https://commitlint.js.org/#/)

1. Commencer par installer la package commitlint ainsi que sa configuration standard
```bash
npm install -g @commitlint/cli @commitlint/config-conventional
```

2. Créer un fichier `commitlint.config.js` à la racine du projet
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

## Ajout de [Husky](https://typicode.github.io/husky/#/)

Husky est un outil qui permet de gérer facilement les Hooks Git en exécutant des scripts au format Node.js

* Installation

Il peut s'installer de manière automatique grâce au script d'initialisation

```bash
npx husky-init && npm install
```

Mais aussi de manière manuelle en exécutant une suite de commandes :

```bash
npm install husky --save-dev
npx husky install
npm set-script prepare "husky install"
```

* Création de hooks

Il est nécessaire des hooks afin d'exécuter les linters, les tests au commit et/ou au push.
Pour ajouter une commande à un hook ou en créer un nouveau, utiliser la commande `husky add <file> [cmd]`

## Ajout de [Storybook](https://storybook.js.org/)

Storybook est un outil qui peut s'avérer très utile pour visualiser et tester ses composants en isolation. Il s'installe très facilement en exécutant le script d'init :

```bash
npx storybook init
```
