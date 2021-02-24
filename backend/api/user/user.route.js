const router = require('express').Router();
const fetch = require('node-fetch');
const dao = require('./user.dao');

// router.post('/',(req,res) =>{
//     //console.log(req);
//     console.log("hello");
    
//     let data = req.body
//     console.log(req.body);
//      res.send("success");
//     // fetch('http://localhost:3001/users', {
//     //     method: 'POST', // or 'PUT'
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify(data),
//     // });

// });

router.post('/',dao.isUserValid);

router.get('/',(req,res) =>{
    // console.log(req.body);
    
    res.send("hello");
    
});

module.exports = router

