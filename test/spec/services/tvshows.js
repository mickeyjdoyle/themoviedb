'use strict';

describe('Service: tvShows', function () {

  // load the service's module
  beforeEach(module('mytodoApp'));

  // instantiate service
  var tvShows;
  beforeEach(inject(function (_tvShows_) {
    tvShows = _tvShows_;
  }));

  it('should do something', function () {
    expect(!!tvShows).toBe(true);
  });

});
