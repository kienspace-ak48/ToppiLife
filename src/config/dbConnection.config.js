const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_ONL);
        console.log('MongoDB connected 🟢');
    } catch (error) {
        console.error('MongoDB connection failed 🔴: ', error.message);
        process.exit(1); //dung server neu loi
    }
};

module.exports = dbConnection;
