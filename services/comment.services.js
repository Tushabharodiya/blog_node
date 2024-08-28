const { commentSchema } = require("../models")
const { getBlog, addBlog, deleteBlog, updateBlog } = require("../query/query")



let featchComment = () => {
    return commentSchema.find().populate(["user", "blog"])
}

let createComment = (body) => {
    return addBlog(commentSchema, body)
}

let findByIdAndDelete = (id) => {
    return deleteBlog(commentSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateBlog(commentSchema, id, body)
}


module.exports = { featchComment, createComment, findByIdAndDelete, findByIdAndUpdate }