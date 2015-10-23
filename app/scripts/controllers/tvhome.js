'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:TvhomeCtrl
 * @description
 * # TvhomeCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('TvhomeCtrl', function ($scope, $http) {
    $http.get('http://api.themoviedb.org/3/tv/popular?api_key=1f23f7d03cac0a69efe9d8ce137fb9ce')
      .success(function(data) {
        $scope.popular = data;
      });
    $http.get('http://api.themoviedb.org/3/discover/tv?language=en&sort_by=vote_average.desc&vote_count.gte=10&api_key=1f23f7d03cac0a69efe9d8ce137fb9ce')
      .success(function(data) {
        $scope.topRated = data;
      });
  });
