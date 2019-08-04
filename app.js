var express = require("express");
var app = express();
var router = require("./routes/route")
app.get("/", (req, res) => {
    res.json("स्वागत आहे");
});

app.use("/api", router);

app.listen(3000, () => {
    console.log("app is listening at port 3000");
})