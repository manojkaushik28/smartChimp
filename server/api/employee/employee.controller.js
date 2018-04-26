/**
 * GET     /employees              ->  index
 * POST    /employees              ->  create
 * GET     /employees/:id          ->  show
 * PUT     /employees/:id          ->  update
 * DELETE  /employees/:id          ->  destroy
 */

'use strict';

const _ = require('lodash');
const Employee = require('./employee.model');
const taxService = require('./../taxSlab/taxSlab.services');

exports.index =  (req, res) => {
  // or if we want pagination we pagination method in mongose also
  // just need to pass the page Number and limit
  Employee.find((err, doc) => {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(doc);
  });
}

exports.show = (req, res) => {
  Employee.findById(req.params.id, (err, doc) => {
    if (err) {
      return handleError(res, err);
    }
    if (!doc) {
      return res.status(404).send('Not Found');
    }
    return res.json(doc);
  });
}

exports.create = (req, res) =>{
  Employee.create(req.body, (err, doc) => {
    if (err) {
      return handleError(res, err);
    }
    return res.status(201).json(doc);
  });
}

exports.update = (req, res) =>{
  if (req.body._id) {
    delete req.body._id;
  }
  Employee.findById(req.params.id,  (err, doc) => {
    if (err) {
      return handleError(res, err);
    }
    if (!doc) {
      return res.status(404).send('Not Found');
    }
    var updated = _.merge(doc, req.body);
    updated.save( (err) => {
      if (err) {
        return handleError(res, err);
      }
      return res.status(200).json(doc);
    });
  });
}

exports.destroy = (req, res) =>{
  Employee.findById(req.params.id,  (err, doc) => {
    if (err) {
      return handleError(res, err);
    }
    if (!doc) {
      return res.status(404).send('Not Found');
    }
    doc.remove((err) => {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
}
exports.genrateSalarySlip = (req, res) => {
  const empName = req.body.empName;
  const anualSalary = req.body.anualSalary;
  const superRate = req.body.superRate; // percentage not more then 100%
  const salaryStartDate = req.body.salaryStartDate; // '2018-03-15'
  taxService.taxCalucation(anualSalary,2018)
            .then((taxAmount) => {
              let taxAmountPerMonth =Math.round(taxAmount/12);
              let superAmountPerMonth =Math.round(anualSalary * superRate /1200);
              let salaryPerMonth =Math.round(anualSalary / 12);
              let netSalary = salaryPerMonth - taxAmountPerMonth;
              return res.status(200)
                      .json({
                          empName:empName,
                          netSalary:netSalary,
                          grossSalary:salaryPerMonth,
                          superAmount:superAmountPerMonth,
                          taxAmount:taxAmountPerMonth
                      });
            },(err) => {
              return handleError(res, err);
            }
  )
};
const handleError = (res, err) => {
  return res.status(500).send(err);
}
