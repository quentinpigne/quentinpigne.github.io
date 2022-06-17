---
title: "Migration de Karma vers Jest"
weight: 4
tags: ["tests unitaires", "jest", "angular"]
---

Angular est fourni par défaut avec Karma. Il est cependant très simple de passer de Karma à Jest.

## Supprimer Karma
Commencer par supprimer les fichiers `src/karma.conf.js` et `src/test.ts`.

Puis dans le fichier `package.json`, supprimer les dépendances suivantes dans devDependencies:

```json
"karma": "*",
"karma-chrome-launcher": "*",
"karma-coverage-istanbul-reporter": "*",
"karma-jasmine": "*",
"karma-jasmine-html-reporter": "*",
```

## Installer Jest
Installer Jest dans le projet à l'aide de la commande suivante :

```bash
npm i -D jest @types/jest ts-jest @angular-builders/jest
```

Ajouter un fichier nommé `jest.config.js` dans le même dossier que `package.json`

```
/** jest.config.js */

module.exports = {

  collectCoverageFrom: [
    '<rootDir>/src/app/**/*.ts',
    '!<rootDir>/src/app/**/index.ts',
    '!<rootDir>/src/app/**/*.module.ts'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'lcov',
    'text-summary'
  ],

  testPathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/e2e/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/app/*.(js|scss)'
  ],

  testMatch: [
    '<rootDir>/src/app/*.spec.ts',
    '<rootDir>/src/app/**/*.spec.ts'
  ]
};
```

Puis dans le fichier `src/tsconfig.spec.json`:
- Remplcez "jasmine" et "node" par "jest" dans la liste `types`
- Ajouter `"module": "commonjs"` aux `compilerOptions`
- Supprimer "test.js" de la liste `files`

Le fichier `src/tsconfig.spec.json` doit maintenant ressembler à ça:

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "./out-tsc/spec",
    "types": [
      "jest"
    ],
  },
  "files": [
    "polyfills.ts"
  ],
  "include": [
    "**/*.spec.ts",
    "**/*.d.ts"
  ]
}
```

Dans `src/tsconfig.app.json` supprimer "test.ts" de la liste `exclude`.

Et pour finir, modifier le fichier `angular.json`.
Changer la section `projects[your-project].architect.test` de manière à ce quelle ressemble à cela:

```
"test": {
  "builder": "@angular-builders/jest:run",
  "options": {}
},
```

À la suite des ces changements, il peut être nécessaire de supprimer le dossier `node_modules` et de lancer un `npm install` à nouveau.

Il devrait maintenant être possible de lancer les tests avec la commande `npm test`.

Il est aussi possible d'ajouter un script au `package.json` pour lancer la suite de tests directement avec la couverture de code.

```
...
"scripts": {
  ...
  "test:cov": "ng test --coverage"
},
...
```

Et lancer le avec la commande `npm run test:cov`.

Le rapport de couverture de code doit être présent dans le dossier `coverage` à la racine du projet.

## Références

- [https://medium.com/angular-in-depth/migrate-your-angular-library-to-jest-faba9579591a](https://medium.com/angular-in-depth/migrate-your-angular-library-to-jest-faba9579591a)
- [https://dev.to/this-is-angular/migrate-from-jasmine-to-jest-and-testing-in-angular-286i](https://dev.to/this-is-angular/migrate-from-jasmine-to-jest-and-testing-in-angular-286i)
