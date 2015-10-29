(function () {
    'use strict';

    angular.module('app.order')
        .directive('orderCard', orderCard);

    /* @ngInject */
    function orderCard() {
        // Show order info
        // Usage:
        // Creates:

        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                order: '='
            },
            templateUrl: 'app/order/order-card.html'
        };
        return directive;

        function link(scope, element, attrs) {
            var a = element.parent().controller();
            scope.isClosed = function () {
                return a.isClosed(scope.section);
            };
            scope.toggle = function () {
                return a.toggle(scope.section);
            };
        }
    }
})();
