const mongoose = require("mongoose");

const patientIDSchema = new mongoose.Schema({
  patientId: {
    type: String,               
    required: true,
  },

})

const patientIDData = mongoose.model('patientID',patientIDSchema);
module.exports = patientIDData;
module.exports.IncidentSchema = patientIDSchema;