let express = require("express");
const { commentController } = require("../controller");
const validate = require("../middleware/validate");
const { commentValidation } = require("../validation");

let route = express.Router();

route.get("/get", commentController.getComment);
route.post("/add", validate(commentValidation.comment), commentController.postComment);
route.delete("/delete/:id", commentController.deleteComment);
route.put("/update/:id", validate(commentValidation.comment), commentController.updateComment)

module.exports = route;