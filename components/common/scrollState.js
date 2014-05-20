/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app'),
        
        ScrollState = function ($window, $timeout, scrollStateService) {
            
            return {
                
                link: function (scope, elm, attrs) {
                    var raw = elm[0];
                    
                    elm.bind('scroll', function () {
                        if (attrs.scrollState) {
                            scrollStateService.scrollPosition[attrs.scrollState] = raw.scrollTop;
                        }
                    });
                    
                    $timeout(function () {
                        raw.scrollTop = scrollStateService.scrollPosition[attrs.scrollState];
                    });
                }
                
            };
        };
    
    ScrollState.$injector = ['$window', '$timeout', 'scrollStateService'];
    
    app.directive('scrollState', ScrollState);
    
}());