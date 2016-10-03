'use strict';

angular.
module('availApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/avails', {
            template: '<avail-list></avail-list>'
        }).
        when('/avails/:availId', {
            template: '<avail-detail></avail-detail>'
        }).
        otherwise('/avails');
    }
]);