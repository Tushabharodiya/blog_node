const category = require("../models/category.model");
const { userServices, categoryServices } = require("../services")

let getCategory = async (req, res) => {
    try {
        let category = await categoryServices.featchcategory();

        res.status(200).json({
            message: "category get sucessfully...",
            category,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}


let addCategory = async (req, res) => {
    try {

        let body = req.body;

        let findname = await categoryServices.findName(body.name)
        if (findname) {
            throw new Error("blog alreay existed");
        }
        let category = await categoryServices.createCategory(body)
        console.log(category);

        res.status(201).json({
            message: "blog category add successfully...",
            category,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let deleteCategory = async (req, res) => {
    try {

        let { id } = req.params;

        let findBolg = await categoryServices.findById(id)
        // console.log(findBolg);

        if (!findBolg) {
            throw new Error("blog category are not found")
        }
        let category = await categoryServices.findByIdAndDelete(id);
        res.status(200).json({
            message: "blog category delete successfully..",
            category,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let updateCategory = async (req, res) => {

    try {
        let { id } = req.params;
        let body = req.body;

        let newBody = {
            id,
            ...body,
        }

        let category = await categoryServices.findByIdAndUpdate(id, body)

        res.status(200).json({
            message: "category update success",
            newBody,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }

}

module.exports = {getCategory, addCategory, deleteCategory, updateCategory}