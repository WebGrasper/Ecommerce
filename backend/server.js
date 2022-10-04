const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require("./config/database");


//Configuration Path Joining
dotenv.config({path: 'backend/config/config.env'});

//Connecting Database.
connectDatabase();


app.listen(process.env.PORT, ()=>{
    console.log(`Listening at https://localhost:${process.env.PORT}`)
})