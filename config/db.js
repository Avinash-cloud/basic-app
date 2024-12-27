const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://avinashwork2000:1dktB6lAnebUH2o7@cluster0.tfi13.mongodb.net/formValidation');
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Database Connection Error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB; 