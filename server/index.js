const express = require('express');
const app = express();

const connectDB = require('./DB/connect');
const Middleman = require("./Models/middlemen");
const router = express.Router();
const cors = require('cors');


// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// app.get('/register', (req, res) => {
//     res.send("heyvhfbd")
//     // Middleman.create(req.body)
//     // .then(middlemen => res.json({ msg: 'Middlemen added successfully' }))
//     // .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
// });


app.post('/register', (req, res) => {
    console.log(req.body)
    Middleman.create(req.body)
    .then(middlemen => res.json({ msg: 'Middlemen added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});


const port =  5000;

app.listen(port, () => console.log(`Server running on port ${port}`));