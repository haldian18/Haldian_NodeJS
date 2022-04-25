const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Haldian Web - Homepage" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Haldian Web - About Me" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Haldian Web - Contact Me" });
  
});

module.exports = router;
