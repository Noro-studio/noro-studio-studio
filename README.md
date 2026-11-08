# Noro Studio — site vitrine

Site statique responsive réalisé en HTML, CSS et JavaScript natifs. Le dépôt contient le site de présentation de Noro Studio ainsi que quatre mini-sites fictifs de démonstration.

## Structure

- `index.html` : page principale de Noro Studio.
- `styles.css` : styles du site principal.
- `script.js` : navigation mobile et comportement du formulaire.
- `site-config.js` : nom du studio et adresse de contact.
- `legal.html` : modèle d'informations légales, à compléter avant toute exploitation commerciale.
- `exemples/styles-demo.css` : styles communs aux démonstrations.
- `exemples/restaurant.html` : concept fictif Le Comptoir.
- `exemples/artisan.html` : concept fictif Atelier Forme.
- `exemples/immobilier.html` : concept fictif Aurel Immobilier.
- `exemples/beaute.html` : concept fictif Studio Ama.
- `assets/` : logos et icônes SVG.

## Configuration actuelle

L'adresse de contact est déjà renseignée dans `site-config.js` : `contact.lanteuilweb@gmail.com`. Il n'est pas nécessaire de remplacer `A_REMPLACER`.

Le formulaire ouvre le logiciel de messagerie du visiteur avec un message prérempli. Il n'envoie pas automatiquement le message et ne stocke pas les demandes sur un serveur. Le visiteur doit vérifier puis envoyer l'e-mail depuis son application.

## Avant toute exploitation commerciale

1. Vérifier la disponibilité du nom « Noro Studio » auprès de l'INPI et la disponibilité du nom de domaine souhaité.
2. Compléter `legal.html` avec les informations exactes de l'éditeur, du statut, de l'hébergeur et les autres mentions applicables. Les champs entre crochets sont volontairement laissés à compléter.
3. Vérifier le statut et les formalités nécessaires avant de proposer régulièrement des prestations payantes.
4. Valider les tarifs, livrables, délais, modalités de paiement, droits d'utilisation et conditions de maintenance dans un devis ou contrat.
5. Garder visible la mention indiquant que les quatre mini-sites sont des concepts fictifs, tant qu'ils ne sont pas remplacés par des réalisations réelles et autorisées.

Le site peut rester en ligne comme portfolio de démonstration pendant sa préparation. Les informations légales doivent être complétées et vérifiées avant l'exploitation commerciale.

## Tester localement

Ouvrir `index.html` dans un navigateur ou lancer un serveur local :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Publication

Le dépôt est configuré pour GitHub Pages depuis la branche `main`, dossier racine. Les modifications validées sur `main` déclenchent la publication automatique, sous réserve que le déploiement GitHub Pages réussisse.
