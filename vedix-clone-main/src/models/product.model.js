
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title : {type : String, required : true},
    strickedPrice:{type : Number, required : true},
    category:{type:String,required:true},
    price : {type : Number, required : true},
    image:{type:String,required:true},
    role:{type:String,required:false,default:"customer"},
    
    user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true}
},{
    timestamps : true,
    versionKey : false,
})


const Product = mongoose.model("product", productSchema);

module.exports = Product;

//title:'Customized Hair Growth Booster Sage Combo',
// strickedPrice:1300,
// price:1198,
// id:9,
// image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/customized-hair-growth-booster-sage-combo_480x480.png?v=1634639832',
// },
// // {