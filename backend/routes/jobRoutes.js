// backend/routes/jobRoutes.js
import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createJob).get(protect, getJobs);
router
  .route("/:id")
  .get(protect, getJobById)
  .put(protect, updateJob)
  .delete(protect, deleteJob);

export default router;
