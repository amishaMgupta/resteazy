const router = require('express').Router();

const dao = require('./cart.dao');

// router.get('/',dao.getCart);
router.post('/',dao.getCart);
router.post('/update',dao.updateCart);
module.exports = router