const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process'); // Import child_process module
require('dotenv').config();

// Import routes
const dataRoutes = require('./routes/dataRoutes');
const albumRoutes = require('./routes/albumRoutes');
const videoRoutes = require('./routes/videoRoutes'); // Import video routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (uploads)
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Use routes
app.use('/api/data', dataRoutes); // Data routes
app.use('/api/albums', albumRoutes); // Album routes
app.use('/api/videos', videoRoutes); // Video routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // Execute the auto-push.bat script on server start
  exec('auto-push.bat', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing auto-push.bat: ${err.message}`);
      return;
    }
    if (stderr) {
      console.error(`auto-push.bat stderr: ${stderr}`);
    }
    console.log(`auto-push.bat stdout: ${stdout}`);
  });

  // Set up periodic execution (e.g., every hour)
  setInterval(() => {
    exec('auto-push.bat', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error executing auto-push.bat: ${err.message}`);
        return;
      }
      if (stderr) {
        console.error(`auto-push.bat stderr: ${stderr}`);
      }
      console.log(`auto-push.bat stdout: ${stdout}`);
    });
  }, 1000); // Interval in milliseconds (e.g., 3600000ms = 1 hour)
});
