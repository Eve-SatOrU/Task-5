const express = require ("express");
const router = express.Router();
const contoller = require("../controllers/weather");


// routes here
router.get("/weather", contoller.getWeather);
router.get("/", contoller.getIndex);


module.exports = router;