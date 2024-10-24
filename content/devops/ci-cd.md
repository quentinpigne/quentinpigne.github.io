---
title: "CI/CD"
weight: 1
tags: ["ci/cd"]
---

## Introduction

Les pipelines CI/CD permettent un passage simplifié et sécurisé du code en production. Ils doivent s'assurer qu'une application est correctement compilée/assemblée, testée et déployée.

Le principal objectif d'un pipeline CI/CD est de réduire les risques liés à une mise en production. En fournissant au plus tôt un retour sur la qualité du code, les tests et en faisant du déploiement un process simple et répétable. Le déploiement cesse ainsi d'être un évènement exceptionnel et devient fréquent.

Un bon pipeline est divisé en 3 macro-étapes :

* **L'intégration continue (CI)** est une pratique de développement logiciel où, après un merge des modifications du code dans un référentiel central (Git). Chaque modification (commit) déclenche une construction et un test automatisé, fournissant des retours aux développeurs.
* **La livraison continue (CD)** consiste à produire un artefact à partir du code, prêt à être déployé et potentiellement déposé sur un référentiel type *Artifactory*.
* **Le déploiement continue (CD)** consiste à automatiser l'ensemble du processus de mise en production logicielle, y compris la provision de l'infrastructure.

D'autres étapes peuvent être ajoutées en fonction des besoins, comme un alerting. Mais le but premier d'un CI/CD et de s'assurer que le code soit testé et parte en production.

{{< figure src="https://github.com/ByteByteGoHq/system-design-101/blob/main/images/ci-cd-pipeline.jpg?raw=true" >}}

## Les différents stage d'une CI/CD

Un pipeline CI/CD est divisé en "stages", où chaque "stage" accomplit une série de tâches spécifiques. Nous allons voir les étapes essentielles d'un pipeline CI/CD.

### Trigger

Un bon pipeline doit pouvoir se déclencher de manière automatique quand du code est *commit* et *push* sur le dépôt.

Cela peut se faire en configurant l'outil de CI/CD pour récupérer les changements sur le Git à intervalles réguliers ou encore en configurant un Webhook pour notifier l'outil de CI quand un développeur push du code.

### Checkout

Durant cette étape, la CI va récupérer le code à partir d'un dépôt Git. Elle reçoit différentes informations et notamment quel commit à déclencher le pipeline.

Le pipeline checkout le code source à ce commit et démarre le process.

### Compile

Dans le cadre d'un développement dans un langage compilé tel que Java, la première chose à faire est de compiler le programme.

Cela signifie que l'outil de CI doit avoir accès à l'outil de build utilisé pour compiler le programme. Dans le cas de Java, par exemple, il peut s'agir de Maven ou Gradle.

Idéalement, ce stage doit s'exécuter dans un environnement vierge.

### Verify

#### Linter

#### Tests

### Packaging

### Delivery / Deployment

## Références

* [https://www.tutorialworks.com/cicd-pipeline-stages/](https://www.tutorialworks.com/cicd-pipeline-stages/)
