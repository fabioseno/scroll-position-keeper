/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app'),
        
        Feature2Controller = function ($scope) {
            
            var i;
            
            $scope.items = [];
            
            for (i = 500; i <= 700; i += 1) {
                $scope.items.push('Item  ' + i);
            }
            
        };
    
    Feature2Controller.$inject = ['$scope'];
    
    app.controller('feature2Controller', Feature2Controller);
    
}());