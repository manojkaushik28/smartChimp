'use strict';

const _ = require('lodash');
const SalarySlip = require('./salarySlip.model');
/**
 * Get the salary Slip of Employee
 * restriction: 'Only Employee and admin can see it own salary slip'
 */
exports.index = (req, res) => {
  const empId = req.params.empId;
  const calenderYear = req.query.calYear;
  
  SalarySlip.findOne({empId:empId,calenderYear:calenderYear}, (err, users) =>{
    if(err) return handleError(res, err);;
    res.status(200).json(users);
  });
};



const handleError =  (res, err) => {
  return res.status(500).send(err);
}
