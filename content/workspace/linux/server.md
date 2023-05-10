---
title: "Installation d'un serveur Ubuntu"
weight: 1
tags: ["workspace", "server", "ubuntu"]
---

Ce document détaille la procédure d'installation et de mise en service d'un serveur sous Ubuntu.

## Téléchargement de l'image et création de la clé USB bootable sur MAC

### Téléchargement de l'ISO

L'ISO de la distribution Linux Ubuntu Server est téléchargeable sur [ici](https://ubuntu.com/download/server).

### Conversion de l'ISO en IMG

Sous MAC, il est nécessaire de convertir l'image au format ISO en format IMG afin de pouvoir la copier sur une clé USB bootable. Il faut ensuite renommer le fichier parce que MacOS ajoute *.dmg* à la fin du nom.

```bash
hdiutil convert -format UDRW -o ~/path/to/target.img ~/path/to/ubuntu.iso
```

```bash
mv ~/path/to/target.img.dmg ~/path/to/target.img
```

### Copie de l'image sur la clé USB

Commencer par récupérer la liste des disques du MAC avec la commande :

```bash
diskutil list
```

Repérer la clé USB parmis tous les disques présentés et la démonter avec la commande :

```bash
diskutil unmountDisk /dev/diskN
```

Copier ensuite le contenu de l'image sur la clé USB à l'aide de l'utilisaire `dd` :

```bash
sudo dd if=/path/to/downloaded.img of=/dev/rdiskN bs=1m
```

Une fois la copie terminée, la clé USB peut être éjectée.

```bash
diskutil eject /dev/diskN
```

L'installation du système peut ensuite se faire de manière classique sur le serveur. Il est cependant important de choisir l'installation d'un serveur SSH comme `openssh` en même temps que l'installation du système.

## Désactivation de la mise en veille automatique à la fermeture du capôt (Portable uniquement)

Si le serveur est un ancien PC portable, il est nécessaire de désactiver la mise en veille automatique de celui-ci. 2 possibilités en fonction du modèle :

{{< tabs >}}
{{% tab name="logind.conf" %}}
Si le fichier `/etc/systemd/logind.conf` existe, il faut l'éditer et ajouter ou modifier la ligne `HandleLidSwitch=ignore`.
{{% /tab %}}
{{% tab name="libdtn" %}}
Si le fichier `/etc/acpi/event/lidbtn` existe, il faut l'éditer et commenter les 2 lignes 'action' et 'event' (ajoutes un # devant).
{{% /tab %}}
{{< /tabs >}}

## Configuration de SSH

### Copie de la clé SSH et ajout aux *authorized_keys*

On commence par transférer avec *SCP* les clés SSH (privée et publique) sur le serveur.

```bash
scp ~/.ssh/id_rsa [host]:~/.ssh/
scp ~/.ssh/id_rsa.pub [host]:~/.ssh/
```

Puis on ajoute la clé publique aux *authorized_keys* afin de pouvoir désactiver l'authentification par mot de passe.

```bash
cat ~/.ssh/id_rsa.pub > ~/.ssh/authorized_keys
```

### Désactivation de l'authentification par mot de passe pour SSH

Pour ce faire, la configuration du serveur SSH se trouve dans un fichier nommé `sshd_config`.

```bash
sudo vim /etc/ssh/sshd_config
```

Il suffit ensuite de passer la valeur de 3 paramètres à "no":

- ChallengeResponseAuthentication no
- PasswordAuthentication no
- UsePAM no

Puis redémarrer les démon SSH pour appliquer la nouvelle configuration :

```bash
sudo /etc/init.d/ssh restart
```

## Installation de Zsh et [Oh My Zsh](https://ohmyz.sh/)

- `Zsh` est disponible sur les dépôts officiels et s'installe avec la commande :

```bash
sudo apt-get install zsh
```

- Il faut ensuite indiquer au système d'utiliser Zsh par défaut en utilisant l'outil `chsh` :

```bash
sudo chsh -s /bin/zsh
```

- On peut ensuite installer Oh My Zsh avec la commande :

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Mise en place des dotfiles

La récupération des dotfiles sur le serveur se fait avec la commande :

```bash
git clone --bare --branch server git@github.com:quentinpigne/dotfiles.git $HOME/.dotfiles
```

À ce stade, la récupération des dotfiles reste incomplète du fait de conflits avec des fichiers déjà présents (comme .zshrc par exemple).

On va commencer par ajouter l'alias `dotfiles` au fichier `.zshrc` :

```bash
echo "alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'" >> .zshrc
source .zshrc
```

Puis on configure Git pour qu'il n'affiche pas les fichiers non inclus :

```bash
dotfiles config --local status.showUntrackedFiles no
```

Pour finir, on reset les dotfiles afin de supprimer les fichiers en conflit puis on re-checkout la branche server.

```bash
dotfiles reset --hard HEAD
dotfiles checkout server
```

Plus d'informations sur [la page dédiée aux dotfiles]({{< ref "/workspace/dotfiles" >}}).

## Installation de NVim

Il faut être sûr que *software-properties-common* est installé.

```bash
sudo add-apt-repository ppa:neovim-ppa/unstable
sudo apt-get update
sudo apt-get install neovim
```

On va ensuite installer la distribution [AstroNvim](https://astronvim.com/) avec la commande :

```bash
git clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim
```

## Installation de NVM et de NodeJS

[NVM](https://github.com/nvm-sh/nvm) permet d'installer et d'utiliser différentes versions de NodeJS. Il s'installe avec la commande suivante :

```bash
PROFILE=/dev/null bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash'
```

## Installation de Docker

Il faut être sûr que *ca-certificates*, *curl* et *gnupg* sont installés.

On commence par ajouter la clé GPG officielle de Docker :

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

Puis on ajoute le repository correspondants à la distribution Ubuntu du système :

```bash
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Et enfin, on installe les paquets de Docker :

* docker-ce
* docker-ce-cli
* containerd.io
* docker-buildx-plugin
* docker-compose-plugin

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Il est ensuite nécessaire d'ajouter l'utilisateur au groupe `docker` afin d'avoir les bonnes permissions.

```bash
sudo usermod -aG docker $USER
```
