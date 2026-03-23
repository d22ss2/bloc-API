class Article {
  constructor(id, titre, contenu, auteur, date, categorie, tags) {
    this.id = id;
    this.titre = titre;
    this.contenu = contenu;
    this.auteur = auteur;
    this.date = date;
    this.categorie = categorie;
    this.tags = tags;
  }
}

module.exports = Article;
