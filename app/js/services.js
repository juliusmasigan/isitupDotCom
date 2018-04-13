app.factory('Software', function($http) {
  return {
    get: function() {
      return $http.get('/data/softwares.json')
    }
  };
})
.factory('Category', function($http) {
  return {
    get: function() {
      return $http.get('/data/categories.json')
    }
  };
});
