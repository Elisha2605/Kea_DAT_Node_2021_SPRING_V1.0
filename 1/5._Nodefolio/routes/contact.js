const router = require("express").Router();




router.post("/api/contact", (req, res) => {
    const data = req.body;
    console.log(data);
    // todo send email
    res.redirect("/");
});

module.exports = {
    router
};