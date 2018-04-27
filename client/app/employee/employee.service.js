'use strict';

angular.module('smartChimpApp')
  .factory('EmployeeService', function Auth($location, $rootScope, $http, User, $cookieStore, $q) {

    return {

      /**
       * Employee service
       *
       * @param  {employee}  - Employee Info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      genrateSalarySlip: function(employee, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.post('/api/employees/salary-slip/genrate', {
          empName: employee.empName,
          anualSalary: employee.anualSalary
          superRate: employee.superRate
          salaryStartDate: employee.salaryStartDate
        }).
        success(function(data) {
          deferred.resolve(data);
          return cb(data);
        }).
        error(function(err) {
          this.logout();
          deferred.reject(err);
          return cb(err);
        }.bind(this));
        return deferred.promise;
      }
    };
  });
