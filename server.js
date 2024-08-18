const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

const dataRoutes = require('./routes/dataRoutes'); // Import your route

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {

}).then(() => {
  console.log('Connected to MongoDB');
  
}).catch(err => console.log(err));

app.use('/api/data', dataRoutes); // Adjust if your route path is different

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Use your route
