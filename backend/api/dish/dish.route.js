
const router = require('express').Router();

const dao = require('./dish.dao');

router.get('/',dao.getDish);
// router.get('/fullInfo',dao.getFullData)

module.exports = router