const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require('path');
const cors = require("cors");

const router = require('./routes/api');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('hi'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
mongoose.connect('mongodb://localhost/Doctor', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log("MonogoDB connected!!!");
});



app.use('/api',router);


app.listen(PORT, function(){
    console.log(`server is running on port at ${PORT}`);
})