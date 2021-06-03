const mongoose = require("mongoose");

const medicationFormSchema = new mongoose.Schema({
  source_id: {
    type: String,
                        
  },
  patient_id: {
    type: String,
    
  },

  medication: {
      type: Array,
  },

   submittedBy:{
    type: String,
    required: true  
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

})

const medicationFormData = mongoose.model('medicationData',medicationFormSchema);
module.exports = medicationFormData;
module.exports.IncidentSchema = medicationFormSchema;