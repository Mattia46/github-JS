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
    //browser.pause();
    expect(element(by.binding('item.login')).getText()).toEqual('Mattia46');
  });

  it('finds profiles', function() {

    searchBox.sendKeys('Mattia46');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    profiles.each(function(user) {
      user.getText().then(function(text) {
        expect(text()).toContain('Mattia46');
      });
    });
    ////expect(element(by.binding('item.lenght')).getText()).toBe(1);
    //expect(profiles.last().getText()).toEqual(['Mattia46']); //This won't pass!
  });

});
