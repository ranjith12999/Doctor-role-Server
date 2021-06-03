const mongoose = require("mongoose");

const scheduledSchema = new mongoose.Schema({
    doctor_id:{
        type:String,
        required:true
    },
    eventData : {
        type: Array,
        required:true              
    },
    createdBy: {
        type: String          
    },
    updatedBy: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }

});

const scheduledEventData = mongoose.model('ScheduledData',scheduledSchema);
module.exports = scheduledEventData;
module.exports.IncidentSchema = scheduledSchema;