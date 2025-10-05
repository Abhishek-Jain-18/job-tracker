// backend/controllers/jobController.js
import JobApplication from "../models/JobApplication.js";

export const createJob = async (req, res) => {
  try {
    const job = await JobApplication.create({ ...req.body, user: req.user.id });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const { page = 1, limit = 5, status, search, sort, order } = req.query;
    const query = { user: req.user.id };

    if (status) query.status = status;
    if (search) query.company = { $regex: search, $options: "i" };

    const sortOptions = {};
    if (sort) sortOptions[sort] = order === "desc" ? -1 : 1;

    const jobs = await JobApplication.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await JobApplication.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      jobs,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await JobApplication.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await JobApplication.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    const updated = await JobApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await JobApplication.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await job.deleteOne();
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
