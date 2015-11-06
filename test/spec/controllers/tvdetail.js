'use strict';

describe('Controller: TvdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var TvdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TvdetailCtrl = $controller('TvdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
