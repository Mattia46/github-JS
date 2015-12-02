describe('GitHub profile finder', function() {
  it('finds profiles', function() {
    browser.get('http://localhost:8080');

    element(by.model('searchCtrl.searchTerm')).sendKeys('Mattia46');
    element(by.className('btn')).click();

    expect(element(by.binding('item.login')).getText()).
    toEqual('Mattia46');
  });
});
