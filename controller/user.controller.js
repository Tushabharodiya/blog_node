const { userServices } = require("../services")
const uploadImage = require("../services/cloudnary.services")
const { deleteFile } = require("../services/user.services")


let getUser = async (req, res) => {

    try {
        let user = await userServices.featchUser()
        // console.log(blog);

        res.status(200).json({
            message: "user get successfully....",
            user,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}


let addUser = async (req, res) => {

    try {
        let body = req.body;
        let { path, originalname } = req.file;

        let cloud = await uploadImage(path, originalname)

        let newbody = {
            ...body,
            profile: cloud.url,
        }

        let duplicate = await userServices.duplicateUser(body.email)
        if (duplicate) {
            throw new Error("user is alreay register")
        }
        let blog = await userServices.createUser(newbody)

        res.status(201).json({
            message: "user create successfully",
            blog
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let deleteUser = async (req, res) => {
    try {
        let { id } = req.params;

        let user = await userServices.findById(id)

        if (!user) {
            throw new Error("user is not found");
        }
        if (user.profile) {
            deleteFile(user.profile)
        }
        let blog = await userServices.findByIdAndDelete(id);

        res.status(200).json({
            message: "user delete successfully...",
            blog,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let { path } = req.file;

        let updateBody = {
            id,
            ...body,
            profile: path,
        }

        let blog = await userServices.findByIdAndUpdate(id, body)

        res.status(200).json({
            message: "user update success",
            updateBody,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

module.exports = { getUser, addUser, deleteUser, updateUser }