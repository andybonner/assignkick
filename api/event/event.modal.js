/**
 * Created by zainmustafa on 20/10/2017.
 */

let mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

let EventSchema = new mongoose.Schema({
    uid: String,
    title: {
        type: String,
        lowercase: true,
        required: true
    },
    start : {
        type : Date,
        required : true
    },
    end : {
        type : Date,
        required : true
    },
    createdAt: {
        type : Date,
        default : Date.now()
    },
});

module.exports = mongoose.model('Event', EventSchema);
