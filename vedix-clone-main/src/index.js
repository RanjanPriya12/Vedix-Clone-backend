const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const productController2=require("./controllers/product2.controller")
const cors=require("cors");
const {register,login} = require("./controllers/auth.controller")
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

app.use("/products", productController);
app.use("/product", productController2)

app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});