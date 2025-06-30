import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // e.g., "Starter", "Pro", "Enterprise"
    price: { type: Number, required: true },
    features: [String], // e.g., ["10 sender IDs", "5K messages"]
    durationInDays: { type: Number, required: true }, // e.g., 30
  },
  { timestamps: true }
);

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);
