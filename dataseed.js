const mongoose = require('mongoose');
const Country = require('./models/Country');
const State = require('./models/State');
const City = require('./models/City');

mongoose.connect('mongodb+srv://avinashwork2000:1dktB6lAnebUH2o7@cluster0.tfi13.mongodb.net/formValidation', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.error(err));

const seedData = async () => {
    try {
        // Clear existing data
        await Country.deleteMany();
        await State.deleteMany();
        await City.deleteMany();

        // Insert Countries
        const india = await new Country({ name: 'India' }).save();
        const usa = await new Country({ name: 'USA' }).save();

        // Insert States
        const karnataka = await new State({ name: 'Karnataka', countryId: india._id }).save();
        const maharashtra = await new State({ name: 'Maharashtra', countryId: india._id }).save();
        const california = await new State({ name: 'California', countryId: usa._id }).save();
        const texas = await new State({ name: 'Texas', countryId: usa._id }).save();

        // Insert Cities
        await new City({ name: 'Bangalore', stateId: karnataka._id }).save();
        await new City({ name: 'Mysore', stateId: karnataka._id }).save();
        await new City({ name: 'Hubli', stateId: karnataka._id }).save();

        await new City({ name: 'Mumbai', stateId: maharashtra._id }).save();
        await new City({ name: 'Pune', stateId: maharashtra._id }).save();
        await new City({ name: 'Nagpur', stateId: maharashtra._id }).save();

        await new City({ name: 'Los Angeles', stateId: california._id }).save();
        await new City({ name: 'San Francisco', stateId: california._id }).save();
        await new City({ name: 'San Diego', stateId: california._id }).save();

        await new City({ name: 'Houston', stateId: texas._id }).save();
        await new City({ name: 'Dallas', stateId: texas._id }).save();
        await new City({ name: 'Austin', stateId: texas._id }).save();

        console.log('Seed Data Inserted Successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding data:', error);
        mongoose.connection.close();
    }
};

seedData();
