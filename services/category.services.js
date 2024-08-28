const { categorySchema } = require("../models")
const { getBlog, addBlog, duplicateBlog, deleteBlog, findId, updateBlog } = require("../query/query")

let featchcategory = () => {
    return getBlog(categorySchema)
}

let createCategory = (body) => {
    return addBlog(categorySchema, body)
}

let findName = (name) => {
    return duplicateBlog(categorySchema, { name })
}

let findByIdAndDelete = (id) => {
    return deleteBlog(categorySchema, id)
}

let findById = (id) => {
    return findId(categorySchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateBlog(categorySchema, id, body)
}

module.exports = { featchcategory, createCategory, findName, findByIdAndDelete, findById, findByIdAndUpdate }