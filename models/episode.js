import mongoose from "mongoose";

const dexterEpisode = new mongoose.Schema({
  title: { type: String, required: true },
  src: { type: String, required: true },
  director: { type: String, required: true },
  teleplay: { type: String, required: false },
  writter: { type: String, required: false },
  rating: { type: String, required: true },
  synopsis: { type: String, required: true },
});

export default mongoose.models.dexterEpisode ||
  mongoose.model("dexterEpisode", dexterEpisode);
