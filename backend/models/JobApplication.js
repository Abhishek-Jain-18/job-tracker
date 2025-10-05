// backend/models/JobApplication.js
import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    status: {
      type: String,
      enum: ["Applied", "Interviewing", "Rejected", "Offered"],
      default: "Applied",
    },
    isRemote: { type: Boolean, default: false },
    appliedDate: { type: Date, required: true },
    responseDate: { type: Date },
    notes: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// ✅ Derived Field: daysWaited
jobApplicationSchema.virtual("daysWaited").get(function () {
  if (!this.appliedDate) return 0;

  const endDate = this.responseDate ? this.responseDate : new Date();
  const diffInMs = endDate - this.appliedDate;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
});

export default mongoose.model("JobApplication", jobApplicationSchema);
