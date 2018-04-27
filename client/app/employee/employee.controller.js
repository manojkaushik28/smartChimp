'use strict';

angular.module('smartChimpApp')
  .controller('EmployeeCtrl', function ($scope, $http, EmployeeService) {
    $scope.genrateSalarySlip = function(form) {
      EmployeeService.login({
        empName: 'Manoj Kaushik',
        anualSalary: 101020,
        superRate: 12,
        salaryStartDate: '2018-10-10'
      })
      .then( function(data) {
        $scope.salarySlip = data;
        alert(data);
      })
      .catch( function(err) {
        $scope.errors.other = err.message;
      });
    };
    $scope.genrateSalarySlip();
  });
