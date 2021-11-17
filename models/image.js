import mongoose from "mongoose";

const dexterImage = new mongoose.Schema({
  date: { type: String, required: true },
  URL: { type: String, required: false },
  likes: { type: String, required: false },
  dislikes: { type: String, required: false },
});

export default mongoose.models.dexterImage || mongoose.model("dexterImage", dexterImage);
