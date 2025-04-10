const mongoose = require("mongoose")

const connectDB = async () => {
    try {
    
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongodb connect to database on host ${conn.connection.host}`)
    } catch (err) {
        console.log("error",err)
        
    }
}    

module.exports = { connectDB };