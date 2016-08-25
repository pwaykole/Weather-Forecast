// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', 'cities', function($scope, cityService, cities) {

    $scope.city = cityService.city;

   $scope.cities = cities.data;

  /* code to extract cities form the list of cities
  var k = city.filter( function(item){
    return '_id' && 'name' in item;
  }).map( function( item ){
    return { '_id' : item['_id'] , 'name':item['name']}
  });

    console.log(JSON.stringify(k));
*/
    $scope.$watch('city', function() {
       cityService.city = $scope.city;
    });

}]);

weatherApp.controller('forecastController', ['$scope', '_', '$routeParams', 'cityService', function($scope, _, $routeParams, cityService) {

    $scope.city = cityService.city;

    $scope.convertToFahrenheit = function(degK) {

        return Math.round((1.8 * (degK - 273)) + 32);

    }

    $scope.convertToDate = function(dt) {

        return new Date(dt * 1000);

    };

}]);
