import { model, Schema, models } from "mongoose";

const SenderIDSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    senderName: { type: String, required: true, index: true },
    validationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    isValidated: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.SenderID || model("SenderID", SenderIDSchema);
