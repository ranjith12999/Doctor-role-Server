const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    sourceId: {
    type: String,               
    required: true,
  },

  requestedBy: {
    type: String,                  
    required: true,
  },

  AssingendTo: {
    type: String,                   
    required: true,
  },

  patient_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,                      
    required: true,
  },
  createdAt: {
    type: Date,
  },

  createdBy: {
    type: String           
  },
  updatedAt: {
    type: Date               
  },
  updatedBy: {
    type: String       
  }

})

const taskData = mongoose.model('taskData',taskSchema);
module.exports = taskData;
module.exports.IncidentSchema = taskSchema;