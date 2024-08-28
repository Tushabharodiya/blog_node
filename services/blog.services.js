const { blogSchema } = require("../models")
const { getBlog, addBlog, deleteBlog, updateBlog } = require("../query/query")



let feachBlog = () => {
    return blogSchema.find().populate(["author", "category"])
}

let createBlog = (body) => {
    return addBlog(blogSchema, body)
}

let findByIdAndDelete = (id) => {
    return deleteBlog(blogSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateBlog(blogSchema, id, body)
}

module.exports = { feachBlog, createBlog, findByIdAndDelete, findByIdAndUpdate }