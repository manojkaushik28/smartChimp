'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaxSlabSchema = new Schema({
  calenderYear: {type: Number, required: true},
  min: {type: Number, required: true, index:true},
  max: {type: Number, required: true, index:true},
  rate: {type: Number, required: true, index:true},
  fixed: {type: Number, required: true, index:true},
},{
  timestamps : true, // it create two key createAt & updatedAt by default
  collation:'taxSlab' // Name of the collection
});

module.exports = mongoose.model('TaxSlab', TaxSlabSchema);