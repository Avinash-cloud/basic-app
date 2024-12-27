const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


//routs import

const countryRoutes = require('./routes/countryRoutes');
const stateRoutes = require('./routes/stateRoutes');
const cityRoutes = require('./routes/cityRoutes');
const userRoutes = require('./routes/userRoutes');
const allUserRoutes=require('./routes/allUserRoutes')





//app starting 

const app = express();

app.use(bodyParser.json()); 
app.use(cors());

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));  

//database connection 

const connectDB = require('./config/db');  
connectDB();


//routs

app.use('/api/countries', countryRoutes);
app.use('/api/states', stateRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/users', userRoutes);  
app.use('/api/allusers', allUserRoutes) 
     



