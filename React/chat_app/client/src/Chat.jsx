import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Box, TextField, Button, List, ListItem, Typography } from '@mui/material';

const socket = io('http://localhost:3000');

function Chat() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = () => {
        if (message.trim() !== '') {
            socket.emit('send_message', { message });
            setMessage('');
        }
    };

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setChat((prev) => [...prev, data]);
        });

        return () => {
            socket.off('receive_message');
        };
    }, []);

    return (
        <Box sx={{ width: 400, margin: '50px auto', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Chat App</Typography>

            <List sx={{ height: 300, overflowY: 'auto', border: '1px solid #ccc', mb: 2 }}>
                {chat.map((item, index) => (
                    <ListItem key={index}>{item.message}</ListItem>
                ))}
            </List>

            <TextField
                label="Type a message"
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />

            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={sendMessage}>
                Send
            </Button>
        </Box>
    );
}

export default Chat;
