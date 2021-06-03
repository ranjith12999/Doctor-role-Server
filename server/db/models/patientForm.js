const mongoose = require("mongoose");

const patientFormSchema = new mongoose.Schema({
  source_id: {
    type: String,
                        
  },
  patient_id: {
    type: String,
    
  },
  formName: {
    type: String,              
    required: true
  },

  Questions: {
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

const patientFormData = mongoose.model('patientFormData',patientFormSchema);
module.exports = patientFormData;
module.exports.IncidentSchema = patientFormSchema;