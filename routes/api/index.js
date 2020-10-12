const path = require("path");
const router = require("express").Router();
//const apiRoutes = require("./api");

// Post routes
router.use("/posts", postRoutes);

module.exports = router;
