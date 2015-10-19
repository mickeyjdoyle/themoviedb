'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('DetailCtrl', function ($scope, $http, $routeParams) {
    console.log("id:" + $routeParams.movieId);
    $http.get('http://api.themoviedb.org/3/movie/' + $routeParams.movieId + '?api_key=1f23f7d03cac0a69efe9d8ce137fb9ce&append_to_response=credits')
      .success(function(data) {
        $scope.movie = data;
      });

    $http.get('http://api.themoviedb.org/3/movie/' + $routeParams.movieId + '/releases?api_key=1f23f7d03cac0a69efe9d8ce137fb9ce')
      .success(function(data) {
        for (var c = 0; c < data.countries.length; c++)
        {
          var release = data.countries[c];
          console.log(release.iso_3166_1 + ' - ' + release.certification);
          if (release.iso_3166_1 === 'US')
          {
            $scope.certification = release.certification;
          }
        }
        console.log("---" + $scope.certification);
      });

    $http.get('http://api.themoviedb.org/3/movie/' + $routeParams.movieId + '/similar?api_key=1f23f7d03cac0a69efe9d8ce137fb9ce')
      .success(function(data) {
        $scope.similar = data;
      });

    $scope.lessThan = function (value, max) {
      return function(item) {
        console.log(item[value] + '----' + max);
        return item[value] < max;
      };
    };

  });
