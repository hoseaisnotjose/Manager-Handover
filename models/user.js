const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    reports: [reportSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);