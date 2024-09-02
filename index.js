const express = require("express");
const port = 8001;
//const {generateNewShortUrl,redirectToNewURL,getAnalytics} = require("./routes/url")
const urlRoute = require("./routes/url")
const connectToMongoDB  = require("./connection")
const app = express();

connectToMongoDB("mongodb://127.0.0.1:27017/shortURL").then(()=>console.log("MongoDB is Connected."));
app.use(express.json());

app.use("/url",urlRoute);
app.listen(port,()=>console.log("Server is running at port:",port));