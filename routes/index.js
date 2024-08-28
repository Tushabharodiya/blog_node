let express = require("express")
let userRoute = require("./user.route");
let categoryRoute = require("./category.route")
let blogRoute = require("./blog.route")
let commentRoute = require("./comment.route")

let routes = express.Router()

routes.use("/user", userRoute);
routes.use("/category", categoryRoute);
routes.use("/blog", blogRoute);
routes.use("/comment", commentRoute)


module.exports = routes;