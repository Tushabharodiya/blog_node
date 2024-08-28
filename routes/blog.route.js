let express = require("express");
const { blogController } = require("../controller");
const validate = require("../middleware/validate");
const { blogValidation } = require("../validation");

let route = express.Router();

route.get("/get", blogController.getBlog);
route.post("/create", validate(blogValidation.blog), blogController.postBlog);
route.delete("/delete/:id", blogController.deleteBlog);
route.put("/update/:id", validate(blogValidation.blog), blogController.updateBlog)

module.exports = route;