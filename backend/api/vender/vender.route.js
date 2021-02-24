
const router = require('express').Router();

const dao = require('./vender.dao');

router.get('/',dao.getVenders);

module.exports = router

