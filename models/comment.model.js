let mongoose = require("mongoose")

let commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogSchema",
    },
    content: {
        type: String,
    }
})

let comment = mongoose.model("commentSchema", commentSchema)

module.exports = comment;