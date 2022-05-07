const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://KanishkaRajput:khushy1234@cluster0.516ub.mongodb.net/vedix-clone?retryWrites=true&w=majority");
};