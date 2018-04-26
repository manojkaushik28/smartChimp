'use strict';

var express = require('express');
var controller = require('./employee.controller');
var salarySlipController = require('./salarySlip/salarySlip.controller');
var auth = require('../../auth/auth.service');


var router = express.Router();

router.get('/', auth.isAuthenticated(),controller.index);
router.get('/:id', auth.isAuthenticated(),controller.show);
router.post('/', auth.isAuthenticated(),controller.create);
router.put('/:id', auth.isAuthenticated(),auth.hasRole('admin'),controller.update);
router.patch('/:id', auth.isAuthenticated(),auth.hasRole('admin'),controller.update);
router.delete('/:id', auth.isAuthenticated(),auth.hasRole('admin'),controller.destroy);
router.get('/salary-slip/genrate',controller.genrateSalarySlip);

module.exports = router;