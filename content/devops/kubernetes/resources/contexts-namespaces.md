---
title: "Contextes et Namespaces"
weight: 1
tags: ["kubernetes"]
---

## Contextes

Un contexte est une sorte de profil (qui sommes-nous ? où sommes-nous ?)

`kubectl config view` permet de visualiser la configuration du cluster.

Pour lister les contextes:

```bash
kubectl config get-contexts
kubectl config current-context
```

#### Création d'un contexte

`kubectl config set-context [name] --namespace [default_ns] --user [user_name] --cluster [cluster_name]`.

Le nouveau contexte est ensuite activable avec: `kubectl use-context [name]`.

## Namespaces

Un namespace est un élément de K8s permettant de réaliser du cloisonnement comme la gestion de droits ou la possibilité de lancer plusieurs fois le même pod sur un cluster. Il permet aussi d'ordonner et de sécuriser ses déploiements.

Par exemple, le namespace `kube-system` (`kubectl get pods -n kube-system`).

Pour lister les namespaces: `kubectl get namespace`.

#### Création et suppression d'un namespace

- Pour créer un namespace: `kubectl create namespace [name]`.

Il est aussi possible d'utiliser un fichier de description :

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: <insert-namespace-name-here>
```

Qui peut ensuite être appliqué avec: `kubectl create -f ./my-namespace.yaml`.

{{% notice info %}}
Un label immutable `kubernetes.io/metadata.name` est défini automatiquement pour chaque namespace. Sa valeur est le nom du namespace.
{{% /notice %}}

- Pour supprimer un namespace: `kubectl delete namespace [name]`.

{{% notice info %}}
La suppression d'un namespace entraînera la suppression de toutes les ressources qui lui sont associées.
{{% /notice %}}
