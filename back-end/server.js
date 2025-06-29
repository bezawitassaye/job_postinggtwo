require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connection');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/applications', require('./routes/applications'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
