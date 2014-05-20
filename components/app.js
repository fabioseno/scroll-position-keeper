/*global angular*/
angular.module('app', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    'use strict';
    
    $routeProvider.when('/feature1', {
        templateUrl: 'components/feature1/feature1.html',
        controller: 'feature1Controller'
    }).when('/feature2', {
        templateUrl: 'components/feature2/feature2.html',
        controller: 'feature2Controller'
    }).otherwise({
        redirectTo: '/feature1'
    });
}]);