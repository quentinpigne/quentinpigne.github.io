---
title: "Kubernetes"
weight: 1
tags: ["kubernetes"]
---

{{% children depth="2" showhidden="true" %}}

## Présentation

[Kubernetes](https://kubernetes.io/) (souvent abrégé *K8S*), dont le nom vient du grec *timonier* ou *pilote*, est un orchestrateur de conteneurs.

- Google utilise en interne un orchestrateur de conteneurs (**Borg**) depuis plusieurs années déjà (2 milliards de conteneur lancés par semaine en 2014)
- En 2015, Google décide de faire un extract de **Borg** utilisable par la communauté et il l'a reverse à la *CNCF* (Cloud Native Computing Foundation) qui compte des grands noms comme Amazon, Google, Oracle, Docker...
- Fonctionne avec des conteneurs Docker mais pas que... (Containerd, CoreOS...)

Parmi toutes ses fonctionnalités, Kubernetes permet :

- d'**orchestrer** (lancement orchestré de multiples conteneurs)
- de créer de l'**abstraction** (notion de Service != IP, ...)
- d'apporter de la **haute disponibilité**
- de **scaler** (lancement de multiples conteneurs en fonction de paramètres)

## Notions

- Nodes (serveurs): Master ou simple noeud d'execution.
- Pods (pierre centrale de K8S): Ensemble cohérent de conteneurs.
- Services (abstraction des pods): Permet d'éviter la communication par IP car changeantes dans une architecture en conteneurs. Service = ip et port fixe.
- Volumes (persistants ou non): Lieu d'échange entre les pods.
- Deployments: Object de gestion des déploiements. Gère les créations et suppression ainsi que le nombre de replicas.
- Namespaces: Cluster virtuel (ensemble de services) pour cloisonner K8S.

## Premiers pods, déploiements, services et scaling

{{% notice warning %}}
L'utilisation de `kubectl run` et `kubectl create` n'est pas conseillé. Il est préférable d'utiliser des fichiers descriptifs en Yaml.
{{% /notice %}}

Pour lancer un pod et interagir avec via shell: `kubectl run myshell -it --image busybox -- sh`.

Pour créer un déploiement dont les pods seront basés sur une image Nginx: `kubectl create deployment monnginx --image nginx`.

Afin d'obtenir des informations, il est possible d'utiliser la commande `kubectl describe deployment|pod` avec le nom du déploiement ou du pod.

Afin d'accéder à Nginx, il faut créer un service: `kubectl create service nodeport monnginx --tcp 8080:80`.

Différents types de services possibles:
- nodeport: exposition de port, va rendre public le pod via un port (30000-32767).
- clusterip: exposition interne
- loadbalancer: exposition via controller ingress ou dans le cloud.

Il est aussi possible d'utiliser la commande `expose`: `kubectl expose deployment monnginx --type NodePort --port 80`.

Ou bien ponctuellement car non recommandé: `kubectl port-forward [portName] [exposedPort]:[podPort]`.

Il est possible d'augmenter le nombre de pods du déploiement (scaling) par la commande: `kubectl scale deployment monnginx --replicas=2`.

Et pour finir, on peut définir un autoscale via: `kubectl autoscale deployment monnginx --min=2 --max=10`.

## Lister les ressources et objets disponibles dans Kubernetes

- `kubectl api-resources -o wide`: Permet de lister les resources.
- `kubectl api-versions`: Permet de lister les api versions.
- `kubectl explain pod`: Permet d'obtenir la document d'une resource.

## Obtenir le fichier descriptif d'une ressource

Il est possible d'obtenir le fichier Yaml d'une ressource déployée avec: `kubectl get [typeRessource] [nomRessource] -o yaml`.

Par exemple: `kubectl get deployment monnginx -o yaml`.

Il est bien sûr possible de sauvegarder le fichier Yaml avec `>`: `kubectl get deployment monnginx -o yaml > monnginx.yml`.
