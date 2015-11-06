'use strict';

describe('Controller: DetailCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var DetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailCtrl = $controller('DetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
