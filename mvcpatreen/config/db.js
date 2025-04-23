const mongoose = require('mongoose')
const dotenv = require('dotenv');

// local env config
dotenv.config();

const connDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_CONNECTION,{
            useNewUrlParser: true,
        });
    
    console.log(`connected to mongoDB: {conn.connection.host}`)}
 catch(error){
    console.error(error.message);
    process.exit(1)

}
}

module.exports = connDB;
