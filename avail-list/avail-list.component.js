'use strict';

// Register `availList` component, along with its associated controller and template
angular.
module('availList').
component('availList', {
    templateUrl: 'avail-list/avail-list.template.html',
    controller: ['Avail',
        function AvailListController(Avail) {
            this.avails = Avail.query();
            this.orderProp = 'age';
        }
    ]
});
