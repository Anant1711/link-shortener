const express = require('express');
const router = express.Router();
const { homepage } = require("../controllers/Uicontroller");

router.get('/',homepage);

module.exports = router;