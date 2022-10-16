const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');

const app = express();
const PORT = 3001;

app.use(express.static('public'));


app.get('/notes', (req, res) => {
    res.send(path.join(__dirname, 'notes.html'));
});

app.get('./api/notes', (req, res) => {
    res.json(notes)
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})