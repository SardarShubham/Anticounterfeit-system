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


app.post('/register', (req, res) => {
    console.log(req.body)
    Middleman.create(req.body)
    .then(middlemen => res.json({ msg: 'Middlemen added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Middlemen' }));
});

app.post('/login', (req, res) => {
    console.log(req.body)
    const{email, password, walladdr} = req.body;
    console.log(email, password, walladdr)
    // const response = Middleman.findOne({"email":email,"password":password,"walladdr":walladdr});
    // console.log(response)
    // // .then(middlemen => res.json({ middlemen, msg: 'Present' }))
    // // .catch(err => res.status(400).json({ error: 'Not Registered' }));

    Middleman.findOne(email)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id "  });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id="  });
    });


});

const port =  5000;

app.listen(port, () => console.log(`Server running on port ${port}`));