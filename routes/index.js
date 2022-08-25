const express = require("express");

const router = express.Router();

router.use("/demo", require("./demoRoute"));

module.exports = router;
