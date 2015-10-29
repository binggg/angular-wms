(function () {
    'use strict';

    angular.module('app.product')
        .directive('productCard', productCard);

    /* @ngInject */
    function productCard() {
        // Show order info
        // Usage:
        // Creates:

        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                product: '='
            },
            templateUrl: 'app/product/product-card.html'
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
