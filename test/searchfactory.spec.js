describe('factory: Search', function() {

  var search;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(backendHelper)); // inject the dummy item dall'testHelper

  it('responds to query', function(){
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
    .then(function(response) {
      expect(response.data.items).toEqual(items);
    });
    httpBackend.flush();
  });
});
