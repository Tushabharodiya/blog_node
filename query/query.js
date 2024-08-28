

let getBlog = (schema) => {
    return schema.find()
}

let addBlog = (schema, body) => {
    return schema.create(body)
}

let deleteBlog = (schema, id) => {
    return schema.findByIdAndDelete(id)
}

let updateBlog = (schema, id, body) => {
    return schema.findByIdAndUpdate(id, body)
}

let duplicateBlog = (schema, email) => {
    return schema.findOne(email)
}

let findId = (schema, id) => {
    return schema.findById(id)
}

module.exports = { getBlog, addBlog, deleteBlog, updateBlog, duplicateBlog, findId }