app.controller('SoftwareListController', function($scope, Software, Category) {
  var _softwares;
  Software.get().then(
    function(softwares) {
      _softwares = softwares.data._embedded.items;
      return Category.get();
    }, function(error) {
      alert("An error occured in fetching softwares!");
    }
  ).then(
    function(categories) {
      $scope.softwares = _softwares;
      $scope.categories = categories.data._embedded.items;
    }, function(error) {
      alert("An error occured in fetching categories!");
    }
  );

  $scope.get_link = function(category) {
    var link = $scope.categories.find(function(element) {
      pattern = new RegExp(category, "gi");
      if(element.name.search(pattern) === 0) {
        return element;
      }
    });
    return link._links.self.href;
  }
});
