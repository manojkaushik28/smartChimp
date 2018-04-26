'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalarySlipSchema = new Schema({
  empID: {type: Schema.Types.ObjectId,ref: 'Employee', required: true },
  calenderYear: {type: Number, required: true,min:1751 }, // empid & calenderYear both should be unique
  grossSalary: {type: Number, required: true },
  incomeTaxAmount: {type: Number, required: true },
  netAmount: {type: Number, required: true },
  superRate: {type: Number, required: true },// in Percentage not more then 100%
  superAmount: {type: Number, required: true },
},{
  timestamps : true, // it create two key createAt & updatedAt by default
  collation:'salarySlip' // Name of the collection
});
SalarySlipSchema.index({ name: 1, user: 1 }, { unique: true })
module.exports = mongoose.model('SalarySlip', SalarySlipSchema);
