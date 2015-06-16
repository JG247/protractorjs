// spec.js
describe('Protractor example usage', function() {

  beforeEach(function() {
    browser.get('http://localhost/projects/protractorjs/#/home');
  });

  it('should have a title called Test', function() {
    expect(browser.getTitle()).toEqual('Test');
  });
});