var dbConn = require('../connection/db.config');
const getProduct = (req,res) => {
    dbConn.query("select vendors.name as vendorname,dishes.name as dishname,dishes.calories as calories, vendor_dish.price as price from vendors JOIN vendor_dish on (vendors.vendorid = vendor_dish.vendor_id) JOIN dishes on (dishes.dishid = vendor_dish.dish_id)", (err, rows) => {
        if(err) res.status(404).send(err)
        console.log(rows);
        res.status(200).send(rows);
       // dbConn.end();
    });
}

module.exports = {
    getProduct
}