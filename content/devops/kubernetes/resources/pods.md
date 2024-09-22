---
title: "Pods"
weight: 2
tags: ["kubernetes"]
---

Les *Pods* sont les plus petites unités informatiques déployables qui peuvent être créées et gérées dans Kubernetes.

Un *pod* est un groupe d'un ou plusieurs conteneurs (comme des conteneurs Docker), ayant du stockage/réseau partagé, et une spécification sur la manière d'exécuter ces conteneurs.

Les conteneurs d'un pod partagent une adresse IP et un espace de ports, et peuvent communiquer via localhost. Ils peuvent aussi communiquer entre eux en utilisant des communications inter-process standard comme les sémaphores SystemV ou la mémoire partagée POSIX.

## Fichier de description

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: [podName]
  namespace: [namespace]
  labels:
    [label]: value
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 80
  - name: debian
    image: debian
    command: ["sleep", "600"]
```

## Templates de pods

Nous ne sommes pas sensés manipuler les pods directement mais à travers des contrôleurs, comme les *deployments*, les *daemonsets*, les *statefulsets* ou encore les jobs.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: hello
spec:
  template:
    # This is the pod template
    spec:
      containers:
      - name: hello
        image: busybox:1.28
        command: ['sh', '-c', 'echo "Hello, Kubernetes!" && sleep 3600']
      restartPolicy: OnFailure
    # The pod template ends here
```
