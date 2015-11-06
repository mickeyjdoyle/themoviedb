'use strict';
function carousel() {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    scope: {
      images: "=",
      detailURL: "="
    },
    templateUrl: 'views/carousel-poster.html',
    link: function link(scope, element, attrs) {
      var container = angular.element(element);
      var carousel = container.children('.jcarousel');

      console.log("--< " + container.innerWidth());


      scope.$watch(attrs.images, function () {
        console.log("in watch event " + attrs.images.length);
        carousel.jcarousel('reload');
      });

      carousel
        .on('jcarousel:reload jcarousel:create', function (event, data) {
          var inner = angular.element(data.element);
          var numItems = Math.floor(inner.width() / 154);
          var width = inner.innerWidth();
          console.log("in reload event " + width + " - " + numItems + " - " + inner.width());
          carousel.jcarousel('items').css('width', Math.floor(width / numItems) + 'px');
          container.children('.jcarousel-control-prev')
            .jcarouselControl({
              target: '-=' + numItems,
              carousel: carousel
            });

          console.log("0000 - " + numItems);
          container.children('.jcarousel-control-next')
            .jcarouselControl({
              target: '+=' + numItems,
              carousel: carousel
            });
        }
      );

      carousel.jcarousel({
        wrap: 'circular',
        start: 1,
        scroll: 1
      });

    }
  };
}

function carouselBackdrop() {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    scope: {
      images: "=",
      detailURL: "="
    },
    templateUrl: 'views/carousel-backdrop.html',
    link: function link(scope, element, attrs) {
      var container = angular.element(element);
      var carousel = container.children('.jcarousel');


      console.log("blag2");

      carousel.jcarousel({
        wrap: 'circular',
      });

      scope.$watch(attrs.images, function () {
        carousel.jcarousel('reload');
      });

      carousel
        .on('jcarousel:reload jcarousel:create', function (event, data) {
          var inner = angular.element(data.element);
          var numItems = Math.floor(inner.width() / 300);
          var width = inner.innerWidth();
          carousel.jcarousel('items').css('width', Math.floor(width / numItems) + 'px');
          container.children('.jcarousel-control-prev')
            .jcarouselControl({
              target: '-=' + numItems,
              carousel: carousel
            });

          container.children('.jcarousel-control-next')
            .jcarouselControl({
              target: '+=' + numItems,
              carousel: carousel
            });
          }
      );

    }
  };
}
/*
function carouselFeature() {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    scope: {
      images: "="
    },
    templateUrl: 'views/carousel-feature.html',
    link: function link(scope, element, attrs) {
      var container = angular.element(element);
      var carousel = container.children('.feature');


      console.log("blag3");

      carousel.jcarousel({
        wrap: 'circular',
        start: 1,
        scroll: 1
      });

      carousel.jcarouselAutoscroll({
        interval: 10000
      });

      carousel
        .on('jcarousel:reload jcarousel:create ', function (event, data) {
          var inner = angular.element(data.element);
          console.log(inner.innerWidth());
          carousel.jcarousel('items').css('width', inner.innerWidth() + 'px');
        }
      );

      scope.$watch(attrs.images, function () {
        carousel.jcarousel('reload');
        carousel.jcarousel('items').css('width', carousel.innerWidth() + 'px');
      });

      container.children('.feature-control-prev')
        .jcarouselControl({
          target: '-=1',
          carousel: carousel
        });

      container.children('.feature-control-next')
        .jcarouselControl({
          target: '+=1',
          carousel: carousel
        });
    }
  };
}
*/

function carouselFeature2() {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    scope: {
      images: "="
    },
    templateUrl: 'views/carousel-feature2.html',

    link: function link() {
      $("#carousel-example-generic").carousel();
    }
  };
}

function carouselDetailImage() {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    scope: {
      images: "="
    },
    templateUrl: 'views/carousel-detail-image.html',

    link: function link(scope, element, attrs) {
      var container = angular.element(element);

      scope.$watch(attrs.images, function () {
        container.carousel();
      });
    }
  };
}

function starRating () {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    scope: {
      rating: "=",
      max: "="
    },
    templateUrl: 'views/star-rating.html',
    link: function link(scope) {
      scope.maxArray = new Array(scope.max);

      scope.starClass = function(stars, idx) {
        var starClass = 'fa-star-o';
        if (stars >= idx) {
          starClass = 'fa-star';
        }

        return starClass;
      };
    }
  };
}

function formatTime() {
  return function(value) {
    var response = "";
    if (value > 60) {
      response = Math.floor(value / 60) + 'h ';
    }

    response += Math.floor(value % 60) + 'm';
    return response;
  };
}

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, $http) {


    $http.get('http://api.themoviedb.org/3/movie/popular?api_key=1f23f7d03cac0a69efe9d8ce137fb9ce')
      .success(function(data) {
        $scope.popular = data;
      });

    $http.get('http://api.themoviedb.org/3/movie/upcoming?api_key=1f23f7d03cac0a69efe9d8ce137fb9ce')
      .success(function(data) {
        $scope.upcoming = data;
      });

    $scope.baseDetailURL = '#/detail/';
    console.log("blag1");
  })
  .directive('carousel',carousel)
  .directive('carouselBackdrop',carouselBackdrop)
  .directive('carouselFeature',carouselFeature2)
  .directive('carouselDetailImage',carouselDetailImage)
  .directive('starRating', starRating)
  .filter('formatTime', formatTime);

