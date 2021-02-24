let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// Schema defines how the user data will be stored in MongoDB
let cartSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  total:{
      type: String,  
      required:true
  },
  productdetails:[{

  
    vendorname:{type:String,
                required:true},
    dishname:{type:String,
            required:true},
    quantity:{type:Number,
            required:true},
    price:{type:Number,
        required:true},
    calories:{type:String,
        required:true
    }}]         
  });

module.exports = mongoose.model('cart', cartSchema);