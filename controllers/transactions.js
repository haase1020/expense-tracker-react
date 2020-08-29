// @ desc get all transactions
// @ route GET /api/vi/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
};

// @ desc add transaction
// @ route POST /api/vi/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send('POST transaction');
};

// @ desc delete transaction
// @ route DELETE /api/vi/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transaction');
};
