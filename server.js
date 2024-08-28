require("dotenv").config()
let http = require("http")
let express = require("express");
let cors = require("cors")
const dbconnect = require("./db/dbconnect");
const routes = require("./routes");
let app = express()
app.use(express.json());

app.use(cors());
//routes
app.use("/v1", routes)

//database connect
dbconnect()

// http server
http.createServer(app).listen(process.env.PORT, () => {
    console.log("server stated");
})