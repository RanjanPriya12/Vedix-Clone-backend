const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title : {type : String, required : true},
    strickedPrice:{type : Number, required : true},
    price : {type : Number, required : true},
    image:{type:String,required:true},
    role:{type:String,required:false,default:"customer"},
    
    user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true}
},{
    timestamps : true,
    versionKey : false,
})


const Product = mongoose.model("combo", productSchema);

module.exports = Product;