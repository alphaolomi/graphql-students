var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET app page*/

router.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

module.exports = router;
