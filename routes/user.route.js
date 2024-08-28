let express = require("express");
const { userController } = require("../controller");
const validate = require("../middleware/validate");
const { userValidation } = require("../validation");
const upload = require("../middleware/upload");

let route = express.Router();

route.get("/get", userController.getUser);
route.post("/register", upload.single("profile"), validate(userValidation.user), userController.addUser);
route.delete("/delete/:id", userController.deleteUser);
route.put("/update/:id",upload.single("profile"), validate(userValidation.user), userController.updateUser)

module.exports = route;