# Blog API - INF222

REDIGE PAR TCHALONG MANFO MEGANE LAURE 24F2865

Ce projet est une API backend simple pour gérer des articles de blog.  
Développée avec **Node.js**, **Express** et **SQLite** dans le cadre du TAF1 (INF222).

---blog-api/
│
├── server.js
├── swagger.js
├── routes
├── controllers
├── models
└── blog.db   (automatiquement)


 ## Installation

1. Cloner le projet :
   ```bash
   git clone https://github.com/ton-compte/blog-api.git
   cd blog-api
// installation des dependances
npm install
npm install swagger-ui-express swagger-jsdoc

//lancer le serveur
node server.js
le serveur demarre sur :http://localhost:3000
acceder a Swagger :      http://localhost:3000/api-docs
 

 Endpoints disponibles
1. Créer un article

    POSThttp://localhost:3000/api/articles

    Body (JSON):
 {
  "titre": "Mon premier article",
  "contenu": "Ceci est un test",
  "auteur": "MANFO",
  "date": "2026-03-22",
  "categorie": "Test",
  "tags": "demo"
 }
Reponse
 {
  "id": 1,
  "message": "Article cree avec succes"
 }
2. liste des articles
    GET http://localhost:3000/api/articles
Reponse
{
  "articles": [
    {
      "id": 1,
      "titre": "mon premier backend",
      "contenu": "ceci est un test",
      "auteur": "deesse",
      "date": "2026-03-22",
      "categorie": "test",
      "tags": "demo"
    }
  ]
}
 3. modifier un article
  PUT http://localhost:3000/api/articles/1
 {
  "titre":"mon premier part dans le web",
  "contenu":"ceci est un test",
  "auteur":"deesse",
  "date":"2026-03-22",
  "categorie":"test",
  "tags":""
}
Reponse
{
  "message": "Article mis a jour avec succes"
}

4. Supprimer un article
  DELETE  http://localhost:3000/api/articles/2
  
Reponse
{
  "message": "Article supprimé avec succes"
}  
5. Recherche d'un article
   GET ttp://localhost:3000/api/articles/search?query=test
  Reponse
  {
  "message": "Article non trouvé"
}



 #Bonnes pratiques

    Validation des données (titre obligatoire, auteur obligatoire).

    Codes HTTP corrects :

        201 → création réussie

        200 → succès

        404 → article non trouvé

        500 → erreur serveur

 Tests
 
 Les tests peuvent être réalisés avec :
- Thunder Client (extension VS Code)
- Swaggeer (dans un navigateur)

  

