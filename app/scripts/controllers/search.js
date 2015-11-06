'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('SearchCtrl', function ($scope, $http, $routeParams) {

    $scope.searchIt = function(searchTerm) {
      console.log("In Search wiht " + searchTerm);
      $http.get('http://api.themoviedb.org/3/search/multi?language=en&query=' + searchTerm + '&api_key=1f23f7d03cac0a69efe9d8ce137fb9ce')
        .success(function(data) {
          $scope.searchResults = data;
        });
    };

    if ($routeParams.term) {
      $scope.searchIt($routeParams.term);
    }

  });
