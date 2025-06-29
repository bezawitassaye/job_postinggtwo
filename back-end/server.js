require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connection');

const app = express();

// Connect to MongoDB
connectDB();

const allowedOrigins = ['https://job-postinggtwooow.onrender.com'];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like Postman, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/applications', require('./routes/applications'));

// Default root route
app.get('/', (req, res) => {
  res.send('✅ Job Posting API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
