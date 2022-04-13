---
title: "Gestion des fichiers de config"
weight: 1
tags: ["workspace", "dotfiles"]
---

Ce document vise a donner une méthode pour sauvegarder les fichiers de config de sa machine.

## Initialisation du repository

Commencer par créer un bare-repository Git `.dotfiles` afin de pouvoir versionner les fichiers souhaités

```bash
git init --bare $HOME/.dotfiles
```

Puis créer un alias `dotfiles` afin de faciliter l'utilisation de ce repository

```bash
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
```

Configurer git pour qu'il n'affiche pas les fichiers non inclus

```bash
dotfiles config --local status.showUntrackedFiles no
```

Il peut être utile de créer une branche par ordinateur

```bash
dotfiles checkout -b bureau
```

Finir par configurer le dépôt distant et tout pousser dedans

```bash
dotfiles remote add origin git@mondomain.org:monorg/dotfile.git
dotfiles push
dotfiles push --set-upstream origin bureau
```

{{% notice warning %}}
Attention, il ne faut pas pousser des données critiques sur des repository publiques, ni même sur des repos privés hébergés sur des sites publiques comme Github, Gitlab ou Bitbucket.
Par exemple des clef privée ssh, ou des tokens d'api...
{{% /notice %}}

## Utilisation

Pour l'utilisation courante avec des exemples utiles :

```bash
dotfiles status

dotfiles add .vimrc
dotfiles commit -m "Add vimrc"

dotfiles add .bashrc
dotfiles commit -m "Add bashrc"

dotfiles add .bash_aliases
dotfiles commit -m "Add .bash_aliases"

dotfiles add .zshrc
dotfiles commit -m "Add .zshrc"

dotfiles add .ssh/config
dotfiles commit -m "Add .ssh config"

dotfiles add .screenrc
dotfiles commit -m "Add .screenrc"

dotfiles add .kube/config
dotfiles commit -m "Add kubectl config"

dotfiles add .gitconfig .git-credentials
dotfiles commit -m "Add git config"

dotfiles add .aws/config .aws/credentials .aws/shell/awsshellrc .aws/shell/history
dotfiles commit -m "Add aws config"
```

## Restauration des dotfiles sur un ordinateur

Il faut commencer par créer l'alias comme dans la section d'initalisation

```bash
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
```

Puis récuperer le repository

```bash
git clone --bare git@mondomain.org:monorg/dotfile.git $HOME/.dotfiles
```

Et enfin passer sur la bonne branche

```bash
dotfiles checkout bureau
```

{{% notice note %}}
Afin d'éviter les problèmes de perte de données avec les fichiers en conflits ou installés de base, on va les copier dans un répertoire pour les sauvegarder.

```bash
mkdir -p .dotfile-backup && \
dotfiles checkout bureau 2>&1 | egrep "\s+\." | awk {'print $1'} | \
xargs -I{} mv {} .dotfile-backup/{}
```
{{% /notice %}}

et comme on a déplacé les fichiers en conflit, on peut re-lancer le checkout

```bash
dotfiles checkout bureau
```

## Branches différentes

Si on ne veut pas melanger ses fichiers de configurations mais qu'on souhaite tout versionner dans son repo

Il faut creer une autre branche vide `home`

```bash
dotfiles checkout --orphan home
dotfiles add .bash_aliases
dotfiles commit .bash_aliases
dotfiles push --set-upstream origin home
```

Ajouter ensuite tous les fichiers comme décrit au début.

## Références

- [doc](https://medium.com/toutsbrasil/how-to-manage-your-dotfiles-with-git-f7aeed8adf8b)
- [doc](https://www.atlassian.com/git/tutorials/dotfiles)
- [doc](https://wiki.archlinux.org/index.php/Dotfiles)
