const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const TELEGRAM_BOT_TOKEN = '7156539137:AAGTyPWVBv2ENtrM7ZFowKWQDYqGNKnwnws';

app.use(bodyParser.json());

app.post(`/webhook/${TELEGRAM_BOT_TOKEN}`, (req, res) => {
    const message = req.body.message;
    const chatId = message.chat.id;
    const text = message.text;

    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        text: `You said: ${text}`
    })
    .then(response => {
        console.log('Message sent:', response.data);
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });

    res.sendStatus(200);
});

module.exports = app;