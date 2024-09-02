const express = require("express");
const port = 8001;
const urlRoute = require("./routes/url")
const uiRoute = require("./routes/uiRoute");
const connectToMongoDB  = require("./connection")
const app = express();
const path = require("path");

connectToMongoDB("mongodb://127.0.0.1:27017/shortURL").then(()=>console.log("MongoDB is Connected."));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use("/url",urlRoute);
app.use("/",uiRoute);
app.listen(port,()=>console.log("Server is running at port:",port));