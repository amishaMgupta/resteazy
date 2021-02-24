 const router = require('express').Router();

 router.use('/vendor',require('./vender'));
 router.use('/user',require('./user'));
 router.use('/dish',require('./dish'));
 router.use('/product',require('./product')); 
 router.use('/cart',require('./cart')); 
 module.exports = router;