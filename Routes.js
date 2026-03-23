
const express = require('express');
const router = express.Router();
const Controleurs = require('./Controleurs');

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Créer un nouvel article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               contenu:
 *                 type: string
 *               auteur:
 *                 type: string
 *               date:
 *                 type: string
 *               categorie:
 *                 type: string
 *               tags:
 *                 type: string
 *     responses:
 *       201:
 *         description: Article créé avec succès
 */
router.post('/api/articles', Controleurs.createArticle);

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Lire tous les articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Liste de tous les articles
 */
router.get('/api/articles', Controleurs.getArticles);

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Lire un article par ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article trouvé
 *       404:
 *         description: Article non trouvé
 */
router.get('/api/articles/:id',Controleurs.getArticleById);

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Modifier un article existant
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               contenu:
 *                 type: string
 *               categorie:
 *                 type: string
 *               tags:
 *                 type: string
 *     responses:
 *       200:
 *         description: Article mis à jour avec succès
 *       404:
 *         description: Article non trouvé
 */
router.put('/api/articles/:id', Controleurs.updateArticle);

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Supprimer un article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article supprimé avec succès
 *       404:
 *         description: Article non trouvé
 */
router.delete('/api/articles/:id', Controleurs.deleteArticle);

/**
 * @swagger
 * /api/articles/search:
 *   get:
 *     summary: Rechercher un article par mot-clé
 *     tags: [Articles]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Articles correspondant au mot-clé
 */
router.get('/api/articles/search', Controleurs.searchArticles);

module.exports = router;
