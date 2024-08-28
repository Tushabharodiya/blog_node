let express = require("express");
const { categoryController } = require("../controller");
const validate = require("../middleware/validate");
const { categoryValidation } = require("../validation");

let route = express.Router();

route.get("/get", categoryController.getCategory);
route.post("/add", validate(categoryValidation.category), categoryController.addCategory);
route.delete("/delete/:id", categoryController.deleteCategory);
route.put("/update/:id", validate(categoryValidation.category), categoryController.updateCategory);

module.exports = route;