'use strict';

// Register `availList` component, along with its associated controller and template
angular.
module('availList').
component('availList', {
    templateUrl: 'avail-list/avail-list.template.html',
    controller: ['Avail', '$scope',
        function AvailListController(Avail, $scope) {
            this.avails = Avail.query();
            $scope.setFilter = function (key,value){
                var filter = {};
                filter[key] = value;
                return $scope.types = filter;
            };
            $scope.resetFilter = function () {
                return $scope.types = '';
            }
        }
    ]
});
