 const mongoose = require("mongoose");

const scheduledSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    
    role: {
        type: String,
    },
    active: {
        type: Boolean,
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    address: {
        type: String,
    },
    status: {
        type: String,
    },
    
    specialization: {
        type: String,
    },
    
    phone: {
        type: String,
        maxlength: 10,
        minlength: 10,
    },
});

const scheduledEventData = mongoose.model('ScheduledData',scheduledSchema);
module.exports = scheduledEventData;
module.exports.IncidentSchema = scheduledSchema;