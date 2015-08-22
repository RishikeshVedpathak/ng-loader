/* 
 * Author : Rishi Vedpathak
 * Date : 22/08/2015
 * The MIT License (MIT) - Copyright (c) [2015] [Rishikesh Vedpathak]
 */
var app = angular.module('MyLoaderApp', []);

app.controller('loaderController', function($scope) {
    $scope.theme = ['default', 'theme1', 'theme2', 'theme3'];
    $scope.inputTheme = null;
});

app.directive('ngLoader', function() {
    return{
        restrict: 'E',
        replace: true,
        scope: {
            theme: '@'
        },
        template: '<div class="loaderContainer"><div id="loadingProgressG_1"  ng-class="getActiveClass()" class="loadingContainer"><div ng-class="getActiveClass()" class="loadingProgressG loadingProgressG_1"></div></div><div id="loadingProgressG_2" ng-class="getActiveClass()" class="loadingContainer"><div ng-class="getActiveClass()" class="loadingProgressG loadingProgressG_2"></div></div><div id="loadingProgressG_3" ng-class="getActiveClass()" class="loadingContainer"><div ng-class="getActiveClass()" class="loadingProgressG loadingProgressG_3"></div></div></div>',
        link: function(scope, element) {
            scope.getActiveClass = function() {
                var themeIndex = scope.$parent.theme.indexOf(scope.theme.toLowerCase());
                if (themeIndex !== -1) {
                    return scope.$parent.theme[themeIndex];
                } else {
                    return scope.$parent.theme[0];
                }
            };
        }
    };
});