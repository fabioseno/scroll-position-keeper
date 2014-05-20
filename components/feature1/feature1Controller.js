/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app'),
        
        Feature1Controller = function ($scope) {
            
            var i;
            
            $scope.items = [];
            
            for (i = 1; i <= 50; i += 1) {
                $scope.items.push('Item  ' + i);
            }
            
        };
    
    Feature1Controller.$inject = ['$scope'];
    
    app.controller('feature1Controller', Feature1Controller);
    
}());