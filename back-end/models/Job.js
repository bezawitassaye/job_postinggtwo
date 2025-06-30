const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, default: 'Full-Time • Remote' },
  contract: { type: String, default: 'Permanent' },
  salary: { type: String, default: 'Negotiable' },
  logo: { type: String, default: '/company-placeholder.png' },
  posted: { type: String, default: 'Just now' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
