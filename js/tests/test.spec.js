// spec.js
describe('Protractor example usage', function() {
  var text = element(by.id('test_text'));

  beforeEach(function() {
    browser.get('http://localhost/projects/protractorjs/#/');
  });

  it('should have a title called Test', function() {
    expect(browser.getTitle()).toEqual('Test');
  });

  it('should have the text testing', function() {
    expect(text.getText()).toEqual('Testing');
  });
});