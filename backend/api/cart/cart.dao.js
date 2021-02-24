const cartModel = require('./cart.entity');
const getCart = (req,res) =>{
    console.log(req.body);
    cartModel.find({username:`${req.body.username}`},(err, response) => {
        if(err) {
        //   done(err);
        res.status(500).send({error: 'Something is wrong, please try later..!'});
        } else {
            res.status(200).send(response);
        //   done(null, response);
        }
      });
}
const updateCart = (req,res) => {
    let userExist = ""
    console.log("from updateCart",req.body);
    cartModel.find({username:req.body.username},(err,data) => {
        if(err)  console.log(err);
        else {
            if(data.length>0){
               
                let newData = new cartModel();
                newData.username = data[0].username;
                newData.total = parseInt(req.body.total)+ parseInt(data[0].total);
                newData.productdetails = [...req.body.productdetails,...data[0].productdetails]
                console.log("new data",data);
  
                
                cartModel.remove({username:req.body.username},(err,data) => {
                            if(err) console.log(err);
                            else{
                                console.log("data = ",data);
                            }
                        });
                        newData.save((err,data) => {
                            if(err) console.log(err);
                            else console.log(data);
                                
                        });
            }
            else{
                console.log("opppps");
                data=new cartModel()
        data.username = req.body.username;
        data.total = req.body.total;
        data.productdetails.push(req.body.productdetails[0]);
        data.save((err,data) => {
            if(err) console.log(err);
            else console.log(data);
                
        });
    }
}
    });
}


module.exports = {
    getCart,
    updateCart
    // postCart
}
