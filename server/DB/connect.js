
const mongoose = require('mongoose')
const url = "mongodb+srv://thisisbillall:thisisbillall@cluster0.0fkynup.mongodb.net/?retryWrites=true&w=majority";

const connectDB=()=>{

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
}

module.exports = connectDB;
