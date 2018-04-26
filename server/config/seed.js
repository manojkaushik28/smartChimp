/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var TaxSlab = require('../api/taxSlab/taxSlab.model');

TaxSlab.find({}).remove(function() {
  TaxSlab.create({
    min : 0,
    max : 100,
    rate : 10,
    plus : 3500,
    calenderYear :2018
  }
});
