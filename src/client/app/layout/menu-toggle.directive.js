(function () {
    'use strict';

    angular.module('app.layout')
        .directive('menuToggle', menuToggle);

    /* @ngInject */
    function menuToggle() {
        // Opens and closes the sidebar menu.
        // Usage:
        // Creates:

        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                section: '='
            },
            templateUrl: 'app/layout/menu-toggle.html'
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
