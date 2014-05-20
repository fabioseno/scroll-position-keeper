/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app'),
        
        ScrollStateService = function () {
            
            this.scrollPosition = {};
            
            this.resetPosition = function (container) {
                this.scrollPosition[container] = 0;
            };
            
        };
    
    app.service('scrollStateService', ScrollStateService);
    
}());