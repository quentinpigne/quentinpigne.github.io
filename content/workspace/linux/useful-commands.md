---
title: "Commandes utiles"
weight: 2
tags: ["workspace", "linux", "shell"]
---

## Fichiers et arborescence

- Éditer un fichier : (-i pour en place)

```bash
sed -i 's/foo/FOO/' file.txt
```

- Éditer tous les fichiers d'un dossier :

```bash
find . -type f -exec sed -i.bak 's/foo/bar/g' {} \;
```

Cette commande crée un fichier `.bak` pour chaque fichier modifié.

- Supprimer une extension :

```bash
for file in *.[ext]; do mv "$file" "${file%%.[ext]}"; done
```

## Gestion des services

- Récupérer la liste des services s'exécutant sur le système :

```bash
sudo systemctl list-unit
```

- Rechargement du daemon après modification d'un fichier de configuration :

```bash
sudo systemctl daemon-reload
```

- Activer le démarrage automatique d'un service :

```bash
sudo systemctl enable [service]
```

- Démarrer / Redémarrer / Arrêter un service :

```bash
sudo systemctl start|restart|stop [service]
```

- Consulter les logs d'un service

```bash
sudo journalctl -u [service]
```
