// routes/flashcards.javascripts
const express = require('express');
const router = express.Router();
const flashcardsController = require('../controllers/flashcardsController');

// Display all flashcards
router.get('/', flashcardsController.listFlashcards);

// Show form to create a new flashcard
router.get('/new', flashcardsController.showNewForm);

// Create a new flashcard
router.post('/', flashcardsController.createFlashcard);

// Show form to edit an existing flashcard
router.get('/:id/edit', flashcardsController.showEditForm);

// Update a flashcard
router.post('/:id', flashcardsController.updateFlashcard);

// Delete a flashcard
router.post('/:id/delete', flashcardsController.deleteFlashcard);

module.exports = router;
