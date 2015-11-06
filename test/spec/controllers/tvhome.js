'use strict';

describe('Controller: TvhomeCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var TvhomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TvhomeCtrl = $controller('TvhomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
