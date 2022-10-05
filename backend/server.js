const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require("./config/database");



process.on("unhandledRejection", err => {
    console.log(`Sorry But there is an error i.e.  ${err.message}`);
    console.log('Shutting Down...')
    process.exit(1)
});


//Configuration Path Joining
dotenv.config({path: 'backend/config/config.env'});

//Connecting Database.
connectDatabase();


const server = app.listen(process.env.PORT, ()=>{
    console.log(`Listening at https://localhost:${process.env.PORT}`)
})

//Unhandled Promise Rejection

process.on("unhandledRejection", err =>{
    console.log(`Sorry But there is an error i.e.  ${err.message}`);
    console.log("Shutting down the server");
    server.close(()=>{
        process.exit(1)
    });
   

})