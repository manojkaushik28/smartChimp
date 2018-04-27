'use strict';

describe('Controller: EmployeeCtrl', function () {

  // load the controller's module
  beforeEach(module('smartChimpApp'));

  var EmployeeCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/employee/salary-slip/genrate')
      .respond({empName:'xyz',netSalary:1212 }); // so on

    scope = $rootScope.$new();
    smartChimpApp = $controller('smartChimpApp', {
      $scope: scope
    });
  }));

  it('should attach a response of salary slip to the scope', function () {
    $httpBackend.flush();
    expect(scope.salarySlip);
  });
});
