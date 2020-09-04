const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const reportSchema = new mongoose.Schema({
    text: String,
    // description or details: datatype will be "string"
    occupancy: Number,
    arrivals: Number,
    departures: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments:[commentSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Report', reportSchema);