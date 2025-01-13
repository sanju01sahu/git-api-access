const mongoose = require("mongoose");

const githubUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  location: { type: String, default: "" },
  bio: { type: String, default: "" },
  followers: [{ type: String }],
  following: [{ type: String }],
  repositories: { type: String, default: "" },
  created_at: { type: Date, required: true },
  followers_url: { type: String, required: true },
  following_url: { type: String, required: true },
  deleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("GithubUser", githubUserSchema);
