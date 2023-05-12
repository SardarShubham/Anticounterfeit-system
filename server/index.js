const express = require('express');
const connectDB = require('./DB/connect');
const middlemen = require('./Models/middlemen');
const app = express();
const Middleman = require("./Models/middlemen");
const router = express.Router();

// Connect Database
connectDB();


app.get('/', (req, res) => res.send('Hello world!'));

router.post('/register', (req, res) => {
    Middleman.create(req.body)
    .then(middlemen => res.json({ msg: 'Middlemen added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));