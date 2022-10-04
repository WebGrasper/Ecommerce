const mongoose = require("mongoose");

//Connection database with function name "connectDatabase" and then exporting them.
//useCreateIndex is depreceted in mongoDB version 6.

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
           console.log(`Mongodb connected with server : ${data.connection.host}`);
        }).catch((err) => {
           console.log(err);
        });
}

module.exports = connectDatabase;