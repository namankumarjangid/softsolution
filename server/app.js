const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
app.use(express.json());

// database connection
require("./db/conn");


// register models (databse sets)
require('./model/contactModel');
// const Contact = require('./model/contactModel');

// register router
app.use(require('./router/auth'));


app.listen(PORT, () => {
    console.log(`server is runnning port no at ${PORT}`);
});