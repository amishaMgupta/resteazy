const router = require('express').Router();

const dao = require('./product.dao');

router.get('/',dao.getProduct);

module.exports = router