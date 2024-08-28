const { userSchema } = require("../models")
const { getBlog, addBlog, deleteBlog, duplicateBlog, updateBlog, findId } = require("../query/query");
let fs = require("fs")



let featchUser = () => {
    return getBlog(userSchema)
}

let createUser = (body) => {
    return addBlog(userSchema, body)
}

let duplicateUser = (email) => {
    return duplicateBlog(userSchema, { email })
}

let findByIdAndDelete = (id) => {
    return deleteBlog(userSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateBlog(userSchema, id, body)
}

let findById = (id) => {
    return findId(userSchema, id)
}

const deleteFile = (filePath) => {
    try {
        fs.unlinkSync(filePath);
        // console.log(`Successfully deleted ${filePath}`);
    } catch (err) {
        console.error(`Error deleting file: ${err}`);
    }
};

module.exports = { featchUser, createUser, duplicateUser, findByIdAndDelete, findByIdAndUpdate, findById, deleteFile }