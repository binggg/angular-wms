(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$q', 'loginService', 'logger'];
    /* @ngInject */
    function LoginController($q, loginService, logger) {
        var vm = this;
        vm.login = login;
        vm.username = '';
        vm.password = '';

        function login($event) {
            console.log(vm.username, vm.password);
            $event.preventDefault();

            loginService.login()
                .then(function () {
                    console.log('登录成功')
                })
        }

    }
})();
