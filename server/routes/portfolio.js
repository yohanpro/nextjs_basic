const express = require('express');
const router = express.Router();

const portfolioCtrl = require('../controllers/portfolio');

router.post('', portfolioCtrl.savePortfolio);

router.get('', portfolioCtrl.getPortfolios);

router.patch('/:id', portfolioCtrl.updatePortfolio);

router.delete('/:id', portfolioCtrl.deletePortfolio);

module.exports = router;

