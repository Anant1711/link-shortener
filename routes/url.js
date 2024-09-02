const {redirectToNewURL,generateNewShortUrl,getAnalytics} = require("../controllers/url")
const express = require('express');
const router = express.Router();

router.post('/',generateNewShortUrl);
router.get('/:shortid',redirectToNewURL);
router.get('/analytics/:shortid',getAnalytics);

module.exports = router;