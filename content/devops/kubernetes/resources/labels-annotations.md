---
title: "Labels et Annotations"
weight: 1
tags: ["kubernetes"]
---

Ces deux notions, très similaires, permettent notamment d'ajouter des métadonnées aux ressources. Elles s'appliquent à toutes les ressources de Kubernetes.

## Labels

Les labels sont utilisés à l'intérieur de Kubernetes. Notamment avec l'outil *selector* qui permet de sélectionner uniquement les pods en fonction des labels qu'ils contiennent. (sélection poussée, regexp...)

- Ajout d'un label en ligne de commande: `kubectl create deployment monnginx --image nginx --labels "env=prod,group=front`.

- Visualisation des labels: `kubectl get deployment --show-labels`.

- Modification d'un label: `kubectl label deployment [deployment_name] --overwrite "env=dev"`.

- Suppression d'un label: `kubectl label deployment [deployment_name] --overwrite "env-"`.

- Utilisation d'un label dans un selector: `kubectl get pods --selector "env=dev"`.

Il est aussi possible d'utiliser des opérateurs: `kubectl get pods --selector "env in (dev, prod)"`.

## Annotations

Les annotations ont exactement le même fonctionnement que les labels.

Elles permettent de:
- garder des traces
- stocker des fichiers (images en Base64...)
- des liens/url
