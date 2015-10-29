(function () {
    'use strict';

    angular.module('app.layout')
        .directive('menuLink', menuLink);

    /* @ngInject */
    function menuLink() {
        // Opens and closes the sidebar menu.
        // Usage:
        // Creates:

        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                section: '='
            },
            templateUrl: 'app/layout/menu-link.html'
        };
        return directive;

        function link(scope, element, attrs) {
            var a = element.parent().controller();
            scope.isSelected = function () {
                return a.isSelected(scope.section);
            };
            scope.focusSection = function () {
                a.autoFocusContent = !0;
            };
        }
    }
})();
