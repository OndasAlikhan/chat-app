const Express = require('express');
const router = Express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/userModel');



router.post('/create-user', async (req, res) => {
    let user = new User({
        login: req.body.login,
        name: req.body.name,
        surname: req.body.name,
        password: req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
});

router.get('/user', (req, res) => {
    let id = req.body._id;
    let user = User.findById(id);
    console.log(user);
});
module.exports = router;