const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/mercury", function(req, res) {
    res.render("mercury.html");
});

app.get("/venus", function(req, res) {
    res.render("venus.html");
});

app.get("/earth", function(req, res) {
    res.render("earth.html");
});

app.get("/jupiter", function(req, res) {
    res.render("jupiter.html");
});

app.get("/neptune", function(req, res) {
    res.render("neptune.html");
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});

