const mongoose = require("mongoose");
const cloudinarySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});
module.exports = mongoose.model("cloudinary", cloudinarySchema);