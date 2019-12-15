const express = require("express");
const router = express.Router();

const { listHotels } = require("../controllers/hotels");

router.get("/list", listHotels);

module.exports = router;
