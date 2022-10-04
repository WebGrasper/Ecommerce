const app = require('./app');
const dotenv = require('dotenv');


//Configuration Path Joining
dotenv.config({path: 'backend/config/config.env'})


app.listen(process.env.PORT, ()=>{
    console.log(`Listening at https://localhost:${process.env.PORT}`)
})