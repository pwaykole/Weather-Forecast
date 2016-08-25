// SERVICES
weatherApp.service('cityService', [ '$http', function($http) {

    this.city = "New York, NY";
    //get all cities with id for search
    this.getCities = function() {
        return $http.get('cities.json');
    };

}]);
