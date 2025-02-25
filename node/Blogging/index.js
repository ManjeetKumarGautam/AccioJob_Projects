const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

app.listen(3000, () => {
    console.log("Server listen to port 3000");
})

app.get('/home', (req, res) => {
    console.log(res.statusCode);
})