# Publication et maintenance de Noro Studio

## Site actuel

- Dépôt : https://github.com/Noro-studio/noro-studio-studio
- Site publié : https://noro-studio.github.io/noro-studio-studio/
- Branche : `main`
- Source GitHub Pages : `/(root)`
- E-mail de contact configuré : `contact.lanteuilweb@gmail.com`

## Comment les changements sont publiés

Le dépôt GitHub est la source du site. Lorsqu'un changement est enregistré sur la branche `main`, GitHub Pages lance automatiquement une nouvelle publication.

Pour vérifier son état :

1. Ouvrir l'onglet **Actions** du dépôt.
2. Repérer le workflow GitHub Pages le plus récent.
3. Attendre que son statut soit terminé.
4. Ouvrir le site et actualiser la page. En cas d'ancien affichage, faire un rechargement forcé avec `Ctrl + F5`.

## Adresse e-mail

L'adresse est déjà configurée dans `site-config.js` :

```js
window.NORO_CONFIG = {
  brandName: "Noro Studio",
  contactEmail: "contact.lanteuilweb@gmail.com",
  locationLabel: "Studio indépendant · France"
};
```

Le formulaire prépare un e-mail via le logiciel de messagerie du visiteur. Il ne transmet pas automatiquement les demandes à un serveur et ne garantit pas leur réception si aucune application de messagerie n'est configurée sur son appareil.

## Organisation des fichiers

- `index.html`, `styles.css`, `script.js`, `site-config.js` : site principal.
- `assets/` : logos et favicon.
- `exemples/` : mini-sites fictifs de démonstration et leur feuille de style.
- `legal.html` : modèle d'informations légales à compléter.

## Avant de présenter le site à des prospects

- Les exemples « Le Comptoir », « Atelier Forme », « Aurel Immobilier » et « Studio Ama » sont des concepts fictifs, pas des clients réels.
- Compléter les informations légales avec les données exactes de l'éditeur et de l'hébergeur, et vérifier les obligations applicables à la situation.
- Vérifier les droits sur les photos et ressources visuelles.
- Vérifier que les tarifs et les prestations annoncés correspondent bien à ce qui peut être livré.
- Un devis doit définir précisément le périmètre, les délais, les corrections incluses, les frais externes, la maintenance et les modalités de paiement.

## Sécurité

Le dépôt est public : ne jamais y ajouter de mot de passe, clé d'API, document d'identité, donnée personnelle de client ou information confidentielle.
