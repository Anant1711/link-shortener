const url = require("../models/url");
async function homepage(req,res){
    const result = await url.find({});
    res.render('home',{result});
}

module.exports = {
    homepage,
};