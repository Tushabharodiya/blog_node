let mongoose = require("mongoose")

let blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    author: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema",
    }
})

let blog = mongoose.model("blogSchema", blogSchema)

module.exports = blog;