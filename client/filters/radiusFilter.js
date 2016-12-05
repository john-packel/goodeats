
angular.module('goodEats.radiusFilter', [])

.controller('geoController', function($scope, $http) {

  //radius_filter: between 1-40000

  $scope.radiusFilter = function() {

    return $http({
      method: 'POST',
      url: '/location',
      data:
      {
        'term': $scope.food, 
        'location': $scope.location,
        'radius_filter': $scope.radius
      }
    })
    .then(function(data) {
      console.log('THE DATA', data);
      return data;
    })
    .catch(function(error) {
      console.log('ERROR:', error);
    });
  };

});