const mongoose = require('mongoose');

const Chat = require('./models/chat.js');



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

let allchats = [
    {
        from : 'Shubham',
        to : 'Ankit',
        message : 'Hello',
        created_at : new Date()
    },
    {
        from : 'Pankaj',
        to : 'Shubham',
        message : 'Hello',
        created_at : new Date()
    },
    {
        from : 'Shivani',
        to : 'Shunb',
        message : 'abcd',
        created_at : new Date()
    },
    {
        from : 'Manish',
        to : 'Krishna',
        message : 'Good Morning',
        created_at : new Date()
    }
];

Chat.insertMany(allchats)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })