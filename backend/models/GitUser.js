const mongoose = require("mongoose");

const gitUserSchema = new mongoose.Schema({
    login: String ,
    id: Number,
    node_id: String,
    avatar_url: String,
    gravatar_id: String,
    url: String,
    followers_url : String,
    following_url : String,
    gists_url : String,
    starred_url : String,
    subscriptions_url : String,
    organizations_url : String,
    repos_url : String,
    events_url : String,
    received_events_url : String,
    type : String,
    user_view_type : String,
    name : String,
    company : String,
    blog : String,
    location : String,
    email : String,
    html_url : String,
    hireable : Boolean,
    bio : String || null,
    twitter_username : String || null,
    public_repos : Number,
    public_gists : Number,
    followers : Number,
    following : Number,
    created_at : String,
    updated_at : String,
    site_admin : Boolean,

})


const GitUser = mongoose.model("GitUser", gitUserSchema);
module.exports = GitUser;
