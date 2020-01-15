# Wibes

### Description
Le projet Wibes-Api-Youtube est un microService qui permet de récupérer des données sur des vidéos Youtube pour les mettre dans des playlistes.

La documentation des chemins aux donées est : http://localhost:3000/api-docs
Vous y trouverez une rubrique Playlist avec les urls d'accès aux données des playlistes
Vous y trouverez une rubrique Vidéos avec les urls d'accès aux données des vidéos

### Base de données
La structure de la base de données est dans le fichier bdd.sql
Vous trouverez toutes les infos de connection à cette BDD dans le fichier services/connexion.js

### Tests unitaires
Vous trouverez des testes unitaires dans le fichier __test__ qui test si oui ou non une les routes fonctionnent 
lors de l'ajout de la DBB, il faudra ajouter des informations comme des ID qui sont présent dans votre BDD 

### Lancement du projet
Pour lancer ce microService, il faut : 

  - cloner le projet
  
  - créer un fichier config-mail.js 
 Dans l'arboresence générale, avec comme contenue : 
 ```javascript
module.exports = {
    user: "ADRESSE_EMAIL",
    pass: "MPD"
} 
```
  - créer un fichier config.js dans le repertoire services avec comme contenu : 
```javascript
 module.exports = {
    api: 'AIzaSyAN4uhkTbljQMj9xOTu6P1fwcPRMBpfuV0'
}
```   

  - Lancer le microService avec la commande :
```
 node index.js
```   

## Diaporama 
https://docs.google.com/presentation/d/1Yhzz2-7ncAi5mwzGATAV40BvIb-pyIZLMDRtzlpfYbY/edit?usp=sharing