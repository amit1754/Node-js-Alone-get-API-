const express = require("express");
const demoController = require("../Controller/demo");

const router = express.Router();
router.get("/getdetail", demoController.get);

module.exports = router;
