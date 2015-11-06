'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:TvdetailCtrl
 * @description
 * # TvdetailCtrl
 * Controller of the mytodoApp
 */


angular.module('mytodoApp')
  .controller('TvdetailCtrl', function ($scope, $http, $routeParams, tvShows) {
    console.log("id:" + $routeParams.showId);


    $scope.getEpisodes = function (season) {
      console.log("Getting Episodes for Season: " + season);
      $scope.seasonSelected = season;
      tvShows.getSeason($scope.show.id, season)
        .success(function(data){
          $scope.episodes = data;
          $scope.seasonSelected = season.toString();
          console.log("ep: " + data.episodes.length);
        });
    };

    tvShows.getShow($routeParams.showId)
      .success(function(data) {
        $scope.show = data;
        var totalSeasons = data.number_of_seasons;
        $scope.getEpisodes(totalSeasons);
      });
  }).directive('tvDetailInfo',function () {
    return {
      restrict: 'E',
      templateUrl: 'views/tv-detail-info.html',
    };
  });
