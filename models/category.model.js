let mongoose = require("mongoose")

let categorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
})

let category = mongoose.model("categorySchema", categorySchema)

module.exports = category;