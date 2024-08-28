let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    sex: {
        type: String,
    },
    date: {
        type: String,
    },
    profile:{
        type:String,
    }
})

let user = mongoose.model("userSchema", userSchema);
module.exports = user;