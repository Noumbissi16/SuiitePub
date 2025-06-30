// models/PhoneNumber.ts
import mongoose from "mongoose";

const PhoneNumberSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SenderID",
      required: true,
    },
    phoneNumber: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.PhoneNumber ||
  mongoose.model("PhoneNumber", PhoneNumberSchema);
