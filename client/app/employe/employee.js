'use strict';

angular.module('smartChimpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('employee', {
        url: '/employee',
        templateUrl: 'app/employee/employee.html',
        controller: 'EmployeeCtrl'
      });
  });