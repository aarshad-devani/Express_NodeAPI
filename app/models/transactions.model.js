const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    tansactionID: String,
    walletID: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);