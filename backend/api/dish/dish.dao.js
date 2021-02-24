var dbConn = require('../connection/db.config');
const getDish = (req,res) => {
    dbConn.query("select * from dishes", (err, rows) => {
        if(err) res.status(404).send(err)
        console.log(rows);
        res.status(201).send(rows);
       // dbConn.end();
    });
}
// const getFullData = (req,res) => {
//     dbConn.query("select vendors.name as vendorname,dishes.name as DishName,dishes.calories, vendor_dish.price from vendors JOIN vendor_dish on (vendors.vendorid = vendor_dish.vendor_id) JOIN dishes on (dishes.dishid = vendor_dish.dish_id)",(err,rows) => {
//         if(err) res.status(404).send(err)
//         console.log("data",rows);
//         res.status(201).send(rows);
//     })
// }

module.exports = {
    getDish
    // getFullData
}