'use strict';

describe('Service: spaServices.services', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spaServices.services;
  beforeEach(inject(function (_spaServices.services_) {
    spaServices.services = _spaServices.services_;
  }));

  it('should do something', function () {
    expect(!!spaServices.services).toBe(true);
  });

});
