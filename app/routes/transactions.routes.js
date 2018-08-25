module.exports = (app) => {
    const transactions = require('../controllers/transactions.controller.js');

    // Create a new Note
    app.post('/transactions', transactions.create);

    // Retrieve all transactions
    app.get('/transactions', transactions.findAll);

    // Retrieve a single Note with noteId
    app.get('/transactions/:noteId', transactions.findOne);

    // Update a Note with noteId
    app.put('/transactions/:noteId', transactions.update);

    // Delete a Note with noteId
    app.delete('/transactions/:noteId', transactions.delete);
}