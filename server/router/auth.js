const express = require('express');
const router = express.Router();


require('../db/conn');
const Contact = require('../model/contactModel');

router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});

router.get('/contact', (req, res) => {
    res.send(`contact page`);
});


router.post('/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;
    // const name = req.body.name;
    // const email = req.body.email;
    // const phone = req.body.phone;
    // const message = req.body.message;


    if (!name || !email || !phone || !message) {
        console.log("error in contact form");
        console.log(name);
        return res.status(400).json({ error: "plzz filled the data" });
    }

    try {
        const user = new Contact({
            // name: req.body.name,
            // email: req.body.email,
            // phone: req.body.phone,
            // msg: req.body.msg
            name, email, phone, message

        });
        await user.save();
        res.status(201).json({ message: "user saved successfuly" });

    }
    catch (error) {
        console.log(error);
    }
});

module.exports = router;
