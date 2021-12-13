const express = require("express");

const router = express.Router();

const { checkApi } = require("../controllers/");

router.get("/", checkApi);

module.exports = router;
