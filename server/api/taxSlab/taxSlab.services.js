/**
 * taxslab Services
 * 1. Calculate Tax Amount
 */
const TaxSlab = require('./taxSlab.model');

'use strict';

exports.taxCalucation = (anualSalary = 0, calenderYear = 2018) => {
  return new Promise((resolve, reject) => {
    TaxSlab.findOne({
      calenderYear: calenderYear,
      min: { $gte: anualSalary },
      max: { $lte: anualSalary }
    })
      .exec((err, doc) => {
        if (err) { // handling the empty data
          reject(err);
        }
        else {
          // static data for testing
          const doc = {min:10,plus:1200,rate:35}
          //
          let taxAmount = doc.plus + Math.round((anualSalary-doc.min) * doc.rate / 100)
          resolve(taxAmount);
        }
      });
  });
}
