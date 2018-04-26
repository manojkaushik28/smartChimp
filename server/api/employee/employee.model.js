'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  empCode: {type: String, required: true, unique :true },
  empName: {type: String, required: true },
  
},{
  timestamps : true, // it create two key createAt & updatedAt by default
  collation:'Employees' // Name of the collection
});

module.exports = mongoose.model('Employee', EmployeeSchema);