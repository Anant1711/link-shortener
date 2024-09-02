//Schema
const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[
        {timestamp:{type: Number}}
    ],
},{timestamp:true});

const url = mongoose.model("url",schema);
module.exports = url;