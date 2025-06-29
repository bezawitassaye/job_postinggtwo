const Application = require('../models/Application');

exports.applyJob = async (req, res) => {
  try {
    const userId = req.userId; // from your auth middleware
    const { jobId } = req.body;

    if (!jobId) {
      return res.status(400).json({ error: 'Job ID is required' });
    }

    const application = new Application({ userId, jobId });
    await application.save();
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('jobId');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserApplications = async (req, res) => {
  try {
    const userId = req.params.userId;
    const applications = await Application.find({ userId });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.userId }).populate('jobId');
    // Transform data to send job info more clearly
    const result = applications.map(app => ({
      _id: app._id,
      jobId: app.jobId._id,
      jobTitle: app.jobId.title,
      createdAt: app.createdAt,
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};