const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  employee_ID: {
    type: String
  },
  employee_Name: {
    type: String
  },
  employee_Address: {
    type: String
  },
  employee_EmailID: {
    type: String
  },
  employee_Mobile: {
    type: String,
    maxlength: 10,
  },
  employee_Division: {
    type: String
  }
  
})

module.exports = mongoose.model('Employee', employeeSchema)