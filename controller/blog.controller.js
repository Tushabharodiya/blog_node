const { blogServices } = require("../services")

let getBlog = async (req, res) => {

    try {
        let blog = await blogServices.feachBlog()

        res.status(200).json({
            message: "blog get successfully..",
            blog,
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let postBlog = async (req, res) => {
    try {

        let body = req.body;

        let blog = await blogServices.createBlog(body)

        res.status(201).json({
            message: "blog create successfully...",
            blog,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}


let deleteBlog = async (req, res) => {
    try {
        let { id } = req.params;

        let blog = await blogServices.findByIdAndDelete(id)

        res.status(200).json({
            message: "blog delete success",
            blog,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let updateBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let newbody = {
            id,
            ...body
        }

        let blog = await blogServices.findByIdAndUpdate(id, body)

        res.status(200).json({
            message: "blog update successfully...",
            newbody,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getBlog, postBlog, deleteBlog, updateBlog }