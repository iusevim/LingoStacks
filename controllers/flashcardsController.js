// controllers/flashcardsController.javascripts
let flashcards = []; // In-memory storage for demonstration
let nextId = 1;

exports.listFlashcards = (req, res) => {
    res.render('flashcards', { title: 'Flashcards', flashcards });
};

exports.showNewForm = (req, res) => {
    res.render('flashcards', { title: 'New Flashcard', formType: 'new' });
};

exports.createFlashcard = (req, res) => {
    const { word, translation, example, topic } = req.body;
    // Basic validation: word and translation are required
    if (!word || !translation) {
        return res.status(400).send('Word and Translation are required.');
    }
    const newCard = { id: nextId++, word, translation, example, topic };
    flashcards.push(newCard);
    res.redirect('/flashcards');
};

exports.showEditForm = (req, res) => {
    const card = flashcards.find(c => c.id == req.params.id);
    if (!card) return res.status(404).send('Flashcard not found');
    res.render('flashcards', { title: 'Edit Flashcard', formType: 'edit', card });
};

exports.updateFlashcard = (req, res) => {
    const card = flashcards.find(c => c.id == req.params.id);
    if (!card) return res.status(404).send('Flashcard not found');
    const { word, translation, example, topic } = req.body;
    if (!word || !translation) {
        return res.status(400).send('Word and Translation are required.');
    }
    card.word = word;
    card.translation = translation;
    card.example = example;
    card.topic = topic;
    res.redirect('/flashcards');
};

exports.deleteFlashcard = (req, res) => {
    flashcards = flashcards.filter(c => c.id != req.params.id);
    res.redirect('/flashcards');
};
