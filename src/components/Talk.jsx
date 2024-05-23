import React, { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import axios from 'axios';

const Talk = () => {


    const express = require('express');
    const bodyParser = require('body-parser');
    const axios = require('axios');
    
    const app = express();
    const PORT = process.env.PORT || 3000;
    const TELEGRAM_BOT_TOKEN = '7156539137:AAGTyPWVBv2ENtrM7ZFowKWQDYqGNKnwnws';
    
    app.use(bodyParser.json());
    
    app.post(`/webhook/${TELEGRAM_BOT_TOKEN}`, (req, res) => {
        const message = req.body.message;
        const chatId = message.chat.id;
        const text = message.text;
    
        // Здесь вы можете обрабатывать входящее сообщение и отправлять ответ
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
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    



    const [chat, setChat] = useState("");
    const [chatId, setChatId] = useState("");

    const TelegramPost = () => {
        if (chatId.trim() === "") {
            alert("Please enter a valid chat ID.");
            return;
        }

        axios.post(`https://api.telegram.org/bot7156539137:AAGTyPWVBv2ENtrM7ZFowKWQDYqGNKnwnws/sendMessage`, {
            chat_id: chatId,
            text: `<b>Comment: ${chat}</b>`,
            parse_mode: 'html'
        })
        .then(response => {
            console.log("Message sent:", response.data);
            setChat(""); // Clear the input field after sending the message
        })
        .catch(error => {
            console.error("Error sending message:", error);
        });
    };

    return (
        <>
            <Flex>
                <Input
                    placeholder='Write your message'
                    w={"20%"}
                    fontSize={"15px"}
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                />
                <Input
                    placeholder='Chat ID'
                    w={"20%"}
                    fontSize={"15px"}
                    value={chatId}
                    onChange={(e) => setChatId(e.target.value)}
                />
                <Button onClick={TelegramPost}>Send</Button>
            </Flex>
        </>
    );
}

export default Talk;

