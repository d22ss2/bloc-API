const sqlite3 = require('sqlite3').verbose();
const Article = require('./Model');
const db = new sqlite3.Database('./blog.db');

// Créer la table si elle n'existe pas
db.run(`CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titre TEXT NOT NULL,
  contenu TEXT NOT NULL,
  auteur TEXT NOT NULL,
  date TEXT NOT NULL,  
  categorie TEXT,
  tags TEXT
)`);

exports.createArticle = (req, res) => {
  const { titre, contenu, auteur, date, categorie, tags } = req.body;
  db.run(`INSERT INTO articles (titre, contenu, auteur, date, categorie, tags)
          VALUES (?, ?, ?, ?, ?, ?)`,
    [titre, contenu, auteur, date, categorie, tags],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, message: "Article créé avec succès" });
    });
};

exports.getArticles = (req, res) => {
  db.all(`SELECT * FROM articles`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const articles = rows.map(row => new Article(row.id, row.titre, row.contenu, row.auteur, row.date, row.categorie, row.tags));
    res.json({ articles });
  });
};

exports.getArticleById = (req, res) => {
  const id = req.params.id;
  db.get(`SELECT * FROM articles WHERE id = ?`, [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Article non trouvé" });
    res.json(new Article(row.id, row.titre, row.contenu, row.auteur, row.date, row.categorie, row.tags));
  });
};

exports.updateArticle = (req, res) => {
  const id = req.params.id;
  const { titre, contenu, categorie, tags } = req.body;
  db.run(`UPDATE articles SET titre = ?, contenu = ?, categorie = ?, tags = ? WHERE id = ?`,
    [titre, contenu, categorie, tags, id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Article mis à jour avec succès" });
    });
};

exports.deleteArticle = (req, res) => {
  const id = req.params.id;
  db.run(`DELETE FROM articles WHERE id = ?`, [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Article supprimé avec succès" });
  });
};

exports.searchArticles = (req, res) => {
  const query = `%${req.query.query}%`;
  db.all(`SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?`,
    [query, query],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      const articles = rows.map(row => new Article(row.id, row.titre, row.contenu, row.auteur, row.date, row.categorie, row.tags));
      res.json({ articles });
    });
};
