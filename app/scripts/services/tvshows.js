'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.tvShows
 * @description
 * # tvShows
 * Service in the mytodoApp.
 */
angular.module('mytodoApp')
  .service('tvShows', function ($http) {
    var urlBase = 'http://api.themoviedb.org/3/tv/';
    var apiKey = 'api_key=1f23f7d03cac0a69efe9d8ce137fb9ce';

    this.getShow = function(id) {
      return $http.get(urlBase + id + '?' + apiKey + '&append_to_response=credits,images');
    };

    this.getSeason = function(id, season) {
      return $http.get(urlBase + id + '/season/' + season + '?' + apiKey);
    };

  });
