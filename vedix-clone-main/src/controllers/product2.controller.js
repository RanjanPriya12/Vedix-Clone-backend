const express = require("express")
const authorise=require("../middlewares/authorisation");
const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const Product = require("../models/product2.model")

router.post("/", authenticate,authorise(["admin","seller"]), async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const product = await Product.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
});

router.get("/", async (req, res) => {
    try{
        const product = await Product.find()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
});





module.exports = router;