
### Application GoStyle

Application qui permet de scanner des QR Codes afin de récupérer des coupons de réductions pour le shop GoStyle

# Installer l'application

Prérequis
-  Git
-  npm
-  Expo-CLI

### Installation
-  git clone https://github.com/LunarzFR/QRcodeReader.git
-  Dans un terminal
 `npm i`

 `npm install -g expo-cli`


### Lancer l'application localement
- Dans le terminal
`expo start`

### Technologies utilisées
##### Application Réalisé avec le framework  React-Native
Premier point important ce Framework permet de déployer des applications android et IOS, de plus c'est un framework stable et confirmé et très agréable au dévelopement. Plusieurs membres de l'équipe sont habitués a travailler avec ce Framework, grace à leur stage/alternance et projet personnel.

##### React-Native : Le Superset Expo
- Expo est une plate-forme open-source pour créer des application native pour Android, iOS, et sur le web avec JavaScript et React.
- Expo permet de faire des ota update (over-the-air update) qui permet de créer des applications iOS sans passer par l'App store donc gros gain de temps.
- Présence de nombreuses libraries qui nous permet d'ajouter plusieurs fonctionnalitées comme de lire les QRCode ou bien travailler avec la technologie RFID dans un éventuel amélioration de l'application.
- Quels sont les limites au Superset Expo ? 
Il n'y a pas la possibilité de travailler avec le bluetooth mais il n'y a pas l'utilité dans notre application.

##### Web Services : NodeJS avec l'utilisation du Framework Express.js

- Plus rapide sur la création du web service et simplifie le développement

##### Database : SQLite

Il n'est pas néssecaire d'avoir une grande base de donnée pour 20 000 utilisateurs/jours.
Nous avons donc opté pour une base de données SQLite qui très performante et rapide pour nos besoins.
