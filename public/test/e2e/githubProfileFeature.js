describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));
  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github User Search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('Mattia46');
    searchButton.click();
    expect(element(by.binding('item.login')).getText()).toEqual('Mattia46');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('Mattia46');
    searchButton.click();

    var profiles = element.all(by.repeater('item in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('Mattia46');
  });

  it('finds the profiles who corresponds to Mattia46j', function() {
    searchBox.sendKeys('Mattia');
    searchButton.click();

    var profiles = element.all(by.repeater('item in searchCtrl.searchResult.items'));
  });

  it('finds 30 profiles called Mattia', function() {
    searchBox.sendKeys('Mattia');
    searchButton.click();
    var profiles = element.all(by.repeater('item in searchCtrl.searchResult.items'));
    expect(profiles.count()).toEqual(30);
  });
});
