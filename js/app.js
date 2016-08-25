// MODULE
var weatherApp = angular.module('weatherApp', ['ui.router','underscore','ui.bootstrap']);

weatherApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            resolve:{
                cities:['cityService', function(cityService){

                    return cityService.getCities();
                }]
            },
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        });

});

weatherApp.controller('loadingController',function(){
     $(window).load(function() {
        // Animate loader off screen
        setTimeout(function(){
            $(".loading").fadeOut("slow");
        }, 7500);

    });
});
