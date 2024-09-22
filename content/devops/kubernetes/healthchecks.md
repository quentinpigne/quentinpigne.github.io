---
title: "Healthchecks: Liveness et Readiness"
weight: 2
---

- Certaines applications ont besoin d'être restart.
- Prévenir des images mal construites et non fonctionnelles.
- Éviter les coupures lors des déploiements (zero-downtime)

- Liveness = restart automatique
- Readiness = remplacement pod défectueux (suppression du pod et création d'un nouveau)

## Configuration, modes et variables

La configuration des liveness et des readiness se fait exactement de la même façon. 3 modes de vérification sont possibles:

- `command`: exec
- `http`: httpGet
- `tcp`: tcpSocket

- `initialDelaySeconds`: à partir de quand commence le check.
- `periodSeconds`: à quelle fréquence on check.
- `timeoutSeconds`: à partir de quelle durée on timeout.
- `successThreshold`: au bout de combien de positifs on réactive.
- `failureThreshold`: au bout de combien de négatifs on sort.

#### httpGet

- `host`: quel host ?
- `scheme`: protocole (http ou https)
- `path`: route vérifiée
- `httpHeaders`: headers spécifiques
- `port`: port à vérifier

## Exemples

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    test: liveness
  name: liveness-exec
spec:
  containers:
  - name: liveness
    image: registry.k8s.io/busybox
    args:
    - /bin/sh
    - -c
    - touch /tmp/healthy; sleep 30; rm -f /tmp/healthy; sleep 600
    livenessProbe:
      exec:
        command:
        - cat
        - /tmp/healthy
      initialDelaySeconds: 5
      periodSeconds: 5
```
