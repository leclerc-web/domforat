# Plugin Chrome : DomForat – Domaines Expirés

Bienvenue dans **DomForat**, un plugin pour Chrome (ou autres navigateurs Chromium) permettant d’afficher rapidement et simplement la liste de domaines expirés disponibles, à partir d’un simple fichier JSON. Ce projet est conçu pour aider les référenceurs, développeurs et entrepreneurs à repérer des noms de domaines libres qui peuvent être réutilisés.

> **Lien Chrome Store** : [DomfoRat](https://chromewebstore.google.com/detail/domforat-trouver-des-doma/popnjpklpgpjipdhlgggphdalhffmkhi?hl=fr)

> **Site du développeur** : [leclerc-web.fr](https://leclerc-web.fr/)

> **Site associé** : [domforat.com](https://domforat.com/)

---

## Table des Matières
1. [Aperçu du Plugin](#aperçu-du-plugin)
2. [Fonctionnalités Principales](#fonctionnalités-principales)
3. [Installation](#installation)
4. [Structure des Fichiers](#structure-des-fichiers)
5. [Guide d’Utilisation](#guide-dutilisation)
6. [Astuces et Personnalisation](#astuces-et-personnalisation)
7. [Exemple d’Affichage dans la Popup](#exemple-daffichage-dans-la-popup)
8. [Crédits et Mentions](#crédits-et-mentions)
9. [Ressources Utiles](#ressources-utiles)

---

## Aperçu du Plugin

![Capture d'écran 2025-04-03 145744](https://github.com/user-attachments/assets/5cc07fa3-1acc-4c49-8ef2-6bf4dab015ed)


**DomForat** est une extension axée sur la simplicité :
- Elle va **charger** un fichier JSON hébergé (ici : `https://domforat.com/domaines_disponibles.json`) pour lister les domaines expirés.
- Elle affiche un **aperçu** (avec un nombre limité d’entrées, par exemple 10).
- Un bouton « Voir plus... » permet de visiter le site **DomForat** pour consulter l’ensemble des domaines.
- Un **bouton de copie** rapide (icône) vous permet de copier le domaine dans votre presse-papiers en un clic.

Cette approche aide toute personne en quête de **domaines expirés** (souvent prisés pour le référencement, le « dropshipping », ou la construction de PBN).

---

## Fonctionnalités Principales

| Fonctionnalité                  | Description                                                                                                          |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Liste de domaines expirés**  | Affiche la liste des domaines disponibles, directement depuis le fichier JSON.                                       |
| **Copie en un clic**           | Chaque domaine présenté est accompagné d’une icône pour le copier instantanément.                                    |
| **Bouton “Voir plus...”**      | Permet d’ouvrir le site principal domforat.com pour accéder à la liste complète.                                     |
| **Interface à onglets**        | La popup inclut différents onglets : *Domaines*, *Outils* (avec sous-onglets) et *Infos*.                            |
| **Infos sur les domaines**     | L’onglet *Infos* présente un rappel sur les avantages des domaines expirés.                                          |
| **Liens utiles**               | L’onglet *Outils* propose des ressources SEO : hébergeur, générateur de contenu, services de backlinks, etc.        |
| **UI Responsive**              | Adaptée à la taille de la popup Chrome, avec un design sombre et moderne (fichiers CSS personnalisés).               |

---

## Installation

### 1. Installation Manuelle
1. **Téléchargez** ou **clonez** ce dépôt (fichiers) sur votre machine.
2. Ouvrez **Google Chrome** et rendez-vous sur `chrome://extensions/`.
3. Activez le **Mode développeur** (généralement en haut à droite).
4. Cliquez sur **Charger l’extension non empaquetée** (*Load unpacked*).
5. **Sélectionnez** le dossier qui contient le fichier `manifest.json`.

### 2. Vérification
- Une nouvelle icône devrait apparaître dans la barre d’outils de Chrome.
- Cliquez dessus pour **ouvrir la popup** et accéder à la liste de domaines expirés.

---

## Structure des Fichiers

Voici un aperçu de la structure du projet :

```plaintext
.
├── manifest.json         # Fichier manifest principal de l’extension (permissions, nom, description, etc.)
├── icon.png              # Icône de l’extension
├── popup.html            # Page HTML affichée lorsque l’on clique sur l’icône (avec la liste + onglets)
├── popup.css             # Styles CSS pour la popup (thème sombre, animations, etc.)
├── popup.js              # Logique JavaScript (récupération JSON, mise à jour de l’UI, onglets)
├── messages.json         # Fichiers de traductions (FR & EN), si besoin
├── background.js         # (Optionnel) Script d’arrière-plan pour gèrer d’autres tâches
└── README.md             # Documentation principale (ce fichier, pour GitHub)
