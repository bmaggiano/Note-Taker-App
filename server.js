const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');

const app = express();
const PORT = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.post('/api/notes', (req, res) => {

    const { title, text } = req.body;

    const newNote = {
        title,
        text,
    };

    fs.readFile("./db/db.json", 'utf8', (err, data) => {
        const notesArr = JSON.parse(data);
        notesArr.push(newNote)
        const noteString = JSON.stringify(notesArr, null, 2)
    

    fs.writeFile('./db/db.json', noteString, (err) => {
        err
            ? console.log(err)
            : console.log(
                `new note has been submitted`
            )
    })
})
    const response = {
        status: 'success',
        body: newNote,
    };

    res.json(response)
})


app.delete('api/notes/:id', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})