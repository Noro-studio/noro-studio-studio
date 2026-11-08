# Publier Noro Studio gratuitement avec GitHub Pages

GitHub Pages peut héberger gratuitement un site statique dans un dépôt public avec un compte GitHub Free. Le site et son code seront alors visibles publiquement : ne mets aucun mot de passe, document personnel ou donnée privée dans le dépôt.

## 1. Préparer le dossier

1. Télécharge `noro-studio-site.zip` depuis la conversation.
2. Dans Windows, clic droit sur le ZIP puis **Extraire tout**.
3. Ouvre le dossier extrait `noro-studio`.
4. Avant publication, ouvre `site-config.js` dans le Bloc-notes et remplace `A_REMPLACER` par ton adresse e-mail.
5. Complète la page `legal.html` avec les informations exactes. Ne publie pas les mentions entre crochets.

## 2. Créer le dépôt GitHub

1. Connecte-toi à GitHub.
2. Clique sur **New repository**.
3. Nom du dépôt : `noro-studio-site`.
4. Choisis **Public** (requis pour GitHub Free avec GitHub Pages).
5. Crée le dépôt.

## 3. Ajouter les fichiers

1. Dans le dépôt, clique sur **Add file**, puis **Upload files**.
2. Depuis le dossier `noro-studio`, ajoute à la racine du dépôt les fichiers `index.html`, `styles.css`, `script.js`, `site-config.js`, `legal.html`, `README.md`, `.nojekyll` et `GUIDE-PUBLICATION.md`.
3. Ajoute également les trois fichiers du dossier `assets` en conservant le dossier `assets` dans le dépôt. Le résultat doit contenir `assets/mark.svg`, `assets/mark-light.svg` et `assets/favicon.svg`.
4. Clique sur **Commit changes**.

Si le navigateur ne conserve pas le sous-dossier `assets` lors du glisser-déposer, crée le dossier en ajoutant un fichier avec le chemin `assets/mark.svg`, puis téléverse les deux autres fichiers de la même façon.

## 4. Activer GitHub Pages

1. Dans le dépôt, ouvre **Settings**.
2. Dans la colonne latérale, sélectionne **Pages**.
3. Sous **Build and deployment**, choisis **Deploy from a branch**.
4. Sélectionne la branche `main` et le dossier `/ (root)`.
5. Clique sur **Save**.
6. Quand la publication est terminée, GitHub affiche l'adresse du site dans la section Pages. Elle ressemble à `https://TON-PSEUDO.github.io/noro-studio-site/`.

La publication peut prendre quelques minutes. Vérifie le site sur ordinateur et téléphone.

## 5. Avant de montrer le site à un prospect

- Le nom « Noro Studio » est provisoire et n'a pas été vérifié auprès de l'INPI.
- Complète les informations légales et vérifie les obligations applicables à ta situation.
- Le formulaire ouvre le logiciel de messagerie du visiteur ; il ne stocke pas et n'envoie pas les demandes sur un serveur.
- Les trois cartes de portfolio sont des concepts fictifs, pas des clients ou des commandes réelles.
- Vérifie que les prix affichés correspondent à ce que tu sais réellement livrer. Un devis précis doit définir le périmètre, les délais, les retours inclus, les frais tiers, la maintenance et le paiement.
