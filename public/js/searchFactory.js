githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: function(searchTerm) {
      debugger;
      return $http ({
        url: queryUrl,
        methed: 'GET',
        params: {
          'q': searchTerm
        }
      });
    }
  };

}]);
