# Noro Studio — site vitrine

Site vitrine statique, responsive et sans dépendance externe obligatoire ni service payant. Il est construit en HTML, CSS et JavaScript natifs, avec des polices système et des logos SVG locaux.

## Fichiers

- `index.html` : page d'accueil complète.
- `styles.css` : design responsive.
- `script.js` : menu mobile, formulaire et interactions.
- `site-config.js` : paramètres simples à modifier.
- `legal.html` : modèle d'informations légales à compléter.
- `assets/` : logo et favicon SVG.

## Avant de publier

1. Ouvre `site-config.js`.
2. Remplace `A_REMPLACER` par une adresse e-mail que tu contrôles dans `contactEmail`.
3. Vérifie le nom commercial : « Noro Studio » est un nom de travail, il n'a pas fait l'objet d'une recherche d'antériorité INPI ni d'une vérification de domaine.
4. Complète `legal.html` avec les véritables informations de l'éditeur et de l'hébergeur, après avoir vérifié les obligations applicables.
5. Vérifie les tarifs, le périmètre des prestations, les délais, les conditions de paiement, les droits d'utilisation des contenus et les éventuelles conditions de maintenance avant de proposer une offre à un client.
6. Les trois réalisations affichées sur la page d'accueil sont des concepts fictifs. Garde cette mention tant que tu ne les as pas remplacées par des réalisations réelles ou autorisées.

## Formulaire de contact

Le formulaire valide les champs du navigateur puis ouvre le logiciel de messagerie du visiteur avec un e-mail prérempli. Il n'envoie pas automatiquement de message et ne stocke aucune demande sur un serveur. Il fonctionne seulement après configuration de `contactEmail` et si le visiteur dispose d'une application de messagerie configurée.

## Tester sur ton ordinateur

Tu peux double-cliquer sur `index.html` pour ouvrir le site dans ton navigateur. Pour un aperçu plus fiable, lance un petit serveur local depuis ce dossier :

```bash
python -m http.server 8000
```

Puis ouvre `http://localhost:8000`.

## Publication gratuite

Le site peut être hébergé comme site statique sur une offre gratuite compatible, par exemple GitHub Pages. Le nom de domaine personnalisé, s'il est souhaité, peut être payant. Vérifie les conditions et limites de l'hébergeur choisi avant publication.

## Important

Le site est un support de démonstration prêt à personnaliser, pas une preuve d'immatriculation, un conseil juridique, ni une garantie de résultat commercial. N'annonce pas de clients, avis ou résultats qui ne sont pas réels.
