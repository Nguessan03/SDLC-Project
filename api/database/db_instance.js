/*const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

//let str = process.env.MONGO_URI
 mongoose.connect(process.env.DB_URI)
        .then(() => console.log("Connected to database"))
        .catch(err => console.log(err));

exports.db_conn = mongoose */

const mongoose = require("mongoose");
require('dotenv').config();  

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to database"))
.catch(err => console.log("Database connection error:", err));

exports.db_conn = mongoose;