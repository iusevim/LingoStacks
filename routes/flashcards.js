const express = require('express');
const router = express.Router();
const flashcardsController = require('../controllers/flashcardsController');

router.get('/', flashcardsController.listFlashcards);
router.get('/new', flashcardsController.showNewForm);
router.post('/', flashcardsController.createFlashcard);
router.get('/:id/edit', flashcardsController.showEditForm);
router.post('/:id', flashcardsController.updateFlashcard);
router.post('/:id/delete', flashcardsController.deleteFlashcard);

module.exports = router;
