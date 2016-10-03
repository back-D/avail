'use strict';

// Register `availDetail` component, along with its associated controller and template
angular.
module('availDetail').
component('availDetail', {
    templateUrl: 'avail-detail/avail-detail.template.html',
    controller: ['$routeParams', 'Avail',
        function AvailDetailController($routeParams, Avail) {
            var self = this;
            self.avail = Avail.get({availId: $routeParams.availId}, function(avail) {
                self.setImage(avail.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});