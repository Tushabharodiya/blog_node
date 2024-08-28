const { commentServices } = require("../services")

let getComment = async (req, res) => {

    try {
        let comment = await commentServices.featchComment()

        res.status(200).json({
            message: "comment Successfully",
            comment,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let postComment = async (req, res) => {
    try {

        let body = req.body;

        let comment = await commentServices.createComment(body)

        res.status(201).json({
            message: "add comment success",
            comment,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let deleteComment = async (req, res) => {
    try {
        let { id } = req.params;

        let comment = await commentServices.findByIdAndDelete(id)
        res.status(200).json({
            message: "comment delete success",
            comment,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let updateComment = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let newBody = {
            id,
            ...body,
        }

        let comment = await commentServices.findByIdAndUpdate(id, body)
        res.status(200).json({
            message: "comment update success",
            newBody,
        });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getComment, postComment, deleteComment, updateComment }