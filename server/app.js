const express = require('express');
const fs = require('fs'); // fs module 
const path = require('path');
const app = express();
app.get('/video', (req, res) => {
    res.sendfile('assets/sample.mp4', { root: __dirname });
});
app.listen('4000', () => {
    console.log('Listening on port 4000......')
});