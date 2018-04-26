/**
 * GET     /taxSlab              ->  index
 */

'use strict';

const _ = require('lodash');
const TaxSlab = require('./taxSlab.model');

exports.index =(req, res) => {
  TaxSlab.find((err, doc) => {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(doc);
  });
}
const handleError = (res, err) => {
  return res.status(500).send(err);
}