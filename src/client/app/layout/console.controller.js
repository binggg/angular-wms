(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('ConsoleController', ConsoleController);

    ConsoleController.$inject = [
        '$rootScope',
        '$timeout',
        'config',
        'logger',
        '$mdSidenav',
        'loginService'
    ];
    /* @ngInject */
    function ConsoleController($rootScope, $timeout, config, logger, $mdSidenav, loginService) {
        var vm = this;
        //vm.busyMessage = '正在加载数据 ...';
        vm.isBusy = true;
        vm.openLeftMenu = openLeftMenu;
        vm.isLogged = isLogged;
        vm.logout = logout;

        function isLogged() {
            return loginService.logged;
        }

        function openLeftMenu() {
            $mdSidenav('left').toggle();
        }

        function logout() {
            loginService.logout();
        }
    }
})();
