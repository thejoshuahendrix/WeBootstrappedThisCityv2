const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const app = express();
const config = require('config')


//BodyParser MiddleWare
app.use(express.json());

//DB Config
const DB = config.get('mongoURI');

//Connect to Mongo
mongoose
.connect(DB, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true})
.then(() => console.log("Mongo Connected".green.underline.bold))
.catch(err => console.log(err));

//Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));