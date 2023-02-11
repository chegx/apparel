const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    res.sendFile(__dirname + "/success.html")
});

app.use((req, res) => {
    res
    .status(404)
    .sendFile(__dirname + "/error.html");
});


app.listen(port, () => console.log(`Listening on port: ${port}`));