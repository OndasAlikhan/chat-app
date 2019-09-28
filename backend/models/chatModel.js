const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    messageHistory: {
        type: Array(String)
    },
    type: String,
    members: {
        type: Array(mongoose.Schema.Types.ObjectId),
        ref: 'User'
    }
});

const Chat = mongoose.model('Chat', chatSchema);

exports.Chat = Chat;