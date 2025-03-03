---
title: "Raccourcis clavier"
weight: 1
tags: ["workspace", "neovim"]
---

## Modes

* `i`: insertion (au niveau du curseur)
* `I`: insertion au début de la ligne
* `a`: insertion (après le curseur)
* `A`: insertion à la fin de la ligne
* `o`: insertion (nouvelle ligne en dessous)
* `O`: insertion (nouvelle ligne au-dessus)
* `s`: insertion après suppression du caractère courant
* `S`: insertion après suppression de la ligne

* `v`: visuel au niveau du curseur
* `V`: visuel au niveau de la ligne
* `Ctrl+v`: visuel bloc

* `r`: remplacer le caractère courant
* `R`: remplacer

* `ESC`: retour au mode normal (commande)

## Fonctionnement global

`{operator}{count}{motion}` ou `{count}{operator}{motion}`

* **operator** désigne l'action qu'on veut effectuer (supprimer, changer, copier, formatter...)
* **count** désigne le nombre de fois que l'on veut effectuer l'action
* **motion** désigne le morceau de texte sur lequel on veut effectuer l'action

Par exemple, pour supprimer 2 mots on peut écrire : `d2w` (**d**elete **2** **w**ords)

## Déplacements

* `h, j, k, l`: déplacements gauche, bas, haut, droite

* `w`: déplacement vers le début du mot suivant (séparé par un espace/une ponctuation)
* `W`: déplacement vers le début du mot suivant (séparé par un espace)
* `e`: déplacement vers la fin du mot suivant (séparé par un espace/une ponctuation)
* `E`: déplacement vers la fin du mot suivant (séparé par un espace)
* `b`: déplacement vers le début du mot précédent (séparé par un espace/une ponctuation)
* `B`: déplacement vers le début du mot précédent (séparé par un espace)

* `$`: déplacement vers la fin d'une ligne
* `0`: déplacement vers le début d'une ligne
* `^`: déplacement vers le premier caractère non-espace d'une ligne
* `f{char}`: saut vers le caractère spécifié
* `F{char}`: saut vers le caractère spécifié en arrière

* `(`: déplacement vers le début d'un bloc
* `)`: déplacement vers la fin d'un bloc
* `{`: déplacement vers le début d'un paragraphe
* `}`: déplacement vers la fin d'un paragraphe

* `Ctrl + d`: déplacement vers le bas d'une moitié d'une page
* `Ctrl + u`: déplacement vers le haut d'une moitié d'une page

* `Ctrl + f`: déplacement vers le bas d'une page
* `Ctrl + b`: déplacement vers le haut d'une page

* `gg`: déplacement vers le début d'un fichier
* `G`: déplacement vers la fin d'un fichier
* `gd`: déplacement vers la définition
* `:{numero}`: déplacement vers la ligne spécifiée

## Modifier

* `cw`: changer un mot
* `ciw`: changer un mot depuis l'intérieur (**c**hange **i**nner **w**ord)
* `s`: remplacer un caractère
* `y`: copier la sélection (`yy` pour copier une ligne complète)
* `p`: coller la sélection (après le curseur)
* `P`: coller la sélection (avant le curseur)
* `yi{(), {}, []}`: copier le contenu de la parenthèse, de la boucle ou de l'array (excl.)
* `ya{(), {}, []}`: copier le contenu de la parenthèse, de la boucle ou de l'array (incl.)
* `di{(), {}, []}`: supprimer le contenu de la parenthèse, de la boucle ou de l'array (excl.)
* `di{(), {}, []}`: supprimer le contenu de la parenthèse, de la boucle ou de l'array (incl.)
* `dd`: supprimer la ligne
* `d$`: supprimer jusqu'à la fin de la ligne
* `d0`: supprimer jusqu'au début de la ligne
* `di{w, s, p}`: supprimer le mot, la phrase ou le paragraphe
* `dt{char}`: supprimer jusqu'au caractère spécifié
* `x`: supprimer le caractère sous le curseur
* `X`: supprimer le caractère avant le curseur

## History

* `u`: annuler
* `Ctrl + r`: rétablir
* `.`: répéter l'opération

## Navigation
* `/`: chercher un mot (`n` prochaine occurrence, `Shift_N` occurrence précédente)
* `?`: chercher un mot en sens inverse (`n` prochaine occurrence, `Shift_N` occurrence précédente)
* `*`: chercher le mot courant
* `#`: chercher le mot courant en sens inverse
* `m{a-z}`: marquer le mot courant
* `\{a-z}`: aller à la marque

## Références

- [https://www.malekal.com/raccourcis-clavier-commandes-vim/#Modifier_le_texte_dans_vim](https://www.malekal.com/raccourcis-clavier-commandes-vim/#Modifier_le_texte_dans_vim)
- [https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/editing-like-magic-with-vim-operators/](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/editing-like-magic-with-vim-operators/)
