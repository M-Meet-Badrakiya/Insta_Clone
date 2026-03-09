const express = require("express");
const app = express();

const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/insta/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    res.render("instagram.ejs", { data })
})

app.listen(port, () => {
    console.log(`server start at @ ${port}`);
})