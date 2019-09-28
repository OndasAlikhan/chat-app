const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

//finish this function if implement jwt later...
userSchema.methods.generateAuthToken = function () {

}

const User = mongoose.model('User', userSchema);

exports.User = User;