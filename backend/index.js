const Express = require('express');
const app = Express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const userController = require('./routes/userController');
const chatController = require('./routes/chatController');

mongoose.connect('mongodb://localhost:27017/chat-app', { useNewUrlParser: true })
    .then(() => console.log('Connected to database.'))
    .catch(() => console.log('Error connecting to db'));


server.listen(3001);

app.use(Express.json());
app.use('/user', userController);
app.get('/chat', chatController);

io.on('connection', (client) => {
    client.on('message sent', (data) => {
        console.log(data);
    });
});