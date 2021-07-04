const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8000;
app.use(express.json());

// database connection
require("./db/conn");

// register models (databse sets)
require('./model/contactModel');

// register router
app.use(require('./router/auth'));

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`server is runnning port no at ${PORT}`);
});