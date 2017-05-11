/**
 * Created by abhi on 4/6/2017.
 */


var app=angular.module('helloWorldApp', [
    'ngRoute'
])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/home',{
                templateUrl:'views/home.html',
                controller:'homeController'
            }).when('/ngClass',{
                templateUrl:'views/ngClass/ngClass.html',
                controller:'ngClass'
            }).when('/formValidation',{
                templateUrl:'views/formValidation/formValidation.html',
                controller:'formValidation'
            }).otherwise({redirectTo:'/formValidation'});
        }
    ]);
