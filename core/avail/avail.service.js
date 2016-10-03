'use strict';

angular.
module('core.avail').
factory('Avail', ['$resource',
    function($resource) {
        return $resource('avails/:availId.json', {}, {
            query: {
                method: 'GET',
                params: {availId: 'avails'},
                isArray: true
            }
        });
    }
]);