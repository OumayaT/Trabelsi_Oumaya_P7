# Trabelsi_Oumaya_P7

### Base de données :

Se connecter au serveur MySql de votre choix.

Aller dans le fichier config/database.json

Vous devrez indiquer le  nom d'utilisateur et le mot de passe correspondent à vos informations d'identification MySQL locales.

Ouvrir le dossier backend dans le terminal de votre éditeur puis exécuter la commande

`npx sequelize-cli db: créer`

`npx sequelize-cli db:migrer`

Avant d'accéder à l'application, vous devrez créer un fichier .env dans le répertoire racine ( backend). 

Dans ce nouveau fichier, ajoutez des variables spécifiques à l'environnement sur les nouvelles lignes sous la forme NAME=VALUE, comme ci-dessous :

TOKEN_SECRET = clé secrète de chiffrement de votre choix
email = adress mail user_test de votre choix
password  = mot de passe de votre choix


### Frontend :

`cd frontend`

`npm install `

`npm run serve`


### Backend :

`cd backend`

`npm install`

`npm start`


enfin: dans votre navigateur se rendre à l'adresse : http://localhost:8080/


