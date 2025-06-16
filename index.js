const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

main()
    .then(() => {
        console.log('Connection Successful');
    })
    .catch((err) => {
        console.log(err);   
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index Route
app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render('index.ejs', {chats});
});

//New Chat Route
app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});

//Create Chat Route
app.post('/chats',(req, res) => {
    let {from, to, message} = req.body;
   let newChat = new Chat({
    from : from,
    to : to,
    message : message,
    created_at : new Date()
   });

   newChat.save().then(() => {
    res.redirect('/chats');
   }).catch((err) => {
    console.log(err);
   });
});

//Edit Chat Route
app.get('/chats/:id/edit', async (req, res) => {
    let chat = await Chat.findById(req.params.id);
    res.render('edit.ejs', {chat});
});

//Update Chat Route
app.put('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let { message : newMessage } = req.body;
    let chat = await Chat.findById(id);
    console.log(newMessage);
    let updateChat = await Chat.findByIdAndUpdate(
        id,
        {message : newMessage},
        {new : true, runValidators : true}
    );
    console.log(updateChat);
    res.redirect('/chats');
}); 

//Delete Chat Route
app.delete('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats');
});
    
   

app.get('/', (req, res) => {
    res.send('Root is Working');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});