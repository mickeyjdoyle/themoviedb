'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:episodes
 * @description
 * # episodes
 */
angular.module('mytodoApp')
  .directive('episodes', function () {
    return {
      templateUrl: 'views/episodes.html',
      restrict: 'E',
      transclude: true,
      scope: {
        episodes: "="
      },
      link: function postLink(scope, element, attrs) {

        scope.$watch(attrs.episodes, function () {
          if(scope.episodes) {
            console.log("episodes: " + scope.episodes.episodes.length);
          }
        });
      }
    };
  });
