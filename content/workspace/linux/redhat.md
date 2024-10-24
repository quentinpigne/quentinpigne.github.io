---
title: "RedHat"
weight: 3
tags: ["workspace", "linux", "redhat"]
---

## Paquets DNF

- Installer un nouveau paquet

```bash
dnf install <nom du paquet1> <nom du paquet2>
```

- Supprimer un paquet

```bash
dnf remove <nom du paquet>
```

- Supprimer un paquet et toutes ses dépendances non utilisées

```bash
dnf autoremove <nom du paquet>
```

## Modules DNF

- Lister les paquets d'un module

```bash
dnf module list <nom du module>
```

- Installer un paquet d'un module

```bash
dnf module install <nom du paquet>
```

- Changer de version d'un module

```bash
dnf module switch-to <nom du paquet>
```

- Reset d'un module

```bash
dnf module reset <nom du module>
```

### Ressources

- [https://doc.fedora-fr.org/wiki/DNF,_le_gestionnaire_de_paquets_de_Fedora#Supprimer_un_paquet](https://doc.fedora-fr.org/wiki/DNF,_le_gestionnaire_de_paquets_de_Fedora#Supprimer_un_paquet)
- [https://www.linuxtricks.fr/wiki/utilisation-de-dnf-commandes-de-base](https://www.linuxtricks.fr/wiki/utilisation-de-dnf-commandes-de-base)
- [https://www.linuxtricks.fr/wiki/utilisation-de-dnf-les-modules](https://www.linuxtricks.fr/wiki/utilisation-de-dnf-les-modules)
- [https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_software_with_the_dnf_tool/assembly_managing-versions-of-application-stream-content_managing-software-with-the-dnf-tool](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_software_with_the_dnf_tool/assembly_managing-versions-of-application-stream-content_managing-software-with-the-dnf-tool)
