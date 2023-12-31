const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/src/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/src/views/home.html") );
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/src/views/login.html") );
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/src/views/register.html") );
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});