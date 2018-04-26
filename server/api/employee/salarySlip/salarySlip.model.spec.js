'use strict';

var should = require('should');
var SalarySlip = require('./salarySlip.model');

var newSalarySlip = new SalarySlip({
  empID: 'asdawe32ad2313qwe',
  calenderYear: 2012,
  grossSalary: 12121,
  incomeTaxAmount: 11,
  netAmount: 121,
  superRate: 22,
  superAmount: 222
});

describe('Salary SLip Model', function() {
  before(function(done) {
    // before testing
    // 
    done();
  });

  // after testing remove the test data
  afterEach(function(done) {
    SalarySlip.remove({empID: ObjectId('asdawe32ad2313qwe'),calenderYear: 2012}).exec().then(function() {
      done();
    });
  });

  it('should fail when saving a duplicate record', function(done) {
    newSalarySlip.save(function() {
      var salarySlipDup = new SalarySlip(newSalarySlip);
      salarySlipDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an calender year', function(done) {
    delete newSalarySlip.calenderYear;
    newSalarySlip.save(function(err) {
      should.exist(err);
      done();
    });
  });
  it('should fail when saving without an calender year less then min value', function(done) {
    newSalarySlip.calenderYear = 1700; // should be greater then 1751
    newSalarySlip.save(function(err) {
      should.exist(err);
      done();
    });
  });
});
