const url = require("../models/url");
const shortid = require("shortid");
async function generateNewShortUrl(req,res){
    const randomID = shortid();
    const body = req.body;
    if(!body.url){
        return res.status(400).json({message: "Please provide a valid URL"});
    }
    await url.create({
        shortID:randomID,
        redirectURL:body.url,
        visitHistory:[],
    });

    return res.json({id:randomID});
}

async function redirectToNewURL(req,res){
    const shortID = req.params.shortid;
    console.log("Short id: ",shortID);
    const entry = await url.findOneAndUpdate({
        shortID,
    },
    {
        $push:{
            visitHistory:{timestamp : Date.now()}
        }
    },)
    res.redirect(entry.redirectURL);
}

async function getAnalytics(req,res){
    const shortid = req.params.shortid;
    console.log("In Analytics, Short ID is: ",shortid);
    const result = await url.findOne({ shortID: shortid });
    console.log("Find: ",result);
    return res.json({totalClicks:result.visitHistory.length , analytics: result.visitHistory});
}
module.exports = {
    generateNewShortUrl,
    redirectToNewURL,
    getAnalytics,
};