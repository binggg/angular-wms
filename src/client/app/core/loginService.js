(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('loginService', loginService)
        .run(appRun);

    appRun.$inject = ['$rootScope', '$urlRouter', 'loginService', 'logger'];
    /* @ngInject */
    loginService.$inject = ['$http', '$q', '$state', '$rootScope', 'exception', 'logger'];
    /* @ngInject */
    function loginService($http, $q, $state, $rootScope, exception, logger) {
        var isLogged = true;//todo 测试 应该为false

        var service = {
            get logged() {
                return isLogged;
            },
            isPublic: isPublic,
            goToLogin: goToLogin,
            login: login,
            logout: logout
        };

        return service;

        function isPublic(state) {
            return state.public;
        }

        function goToLogin() {
            $state.go('login');
            logger.info('请先登录');
            return $q.when();
        }

        function login() {
            return $http.get('/users')
                .then(success)
                .catch(fail);

            function success(response) {
                if (true) {
                    isLogged = true;
                    logger.success('登录成功');
                    redirect();
                    return response.data;
                }
            }

            function redirect() {
                $state.go($rootScope.redirectState || 'dashboard');
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }

        function logout() {
            if (isLogged) {
                return $http.get('/users')
                    .then(success)
                    .catch(fail);
            }

            function success(response) {
                if (true) {
                    isLogged = false;
                    logger.success('退出登录成功');
                    redirect();
                    return response.data;
                }
            }

            function redirect() {
                $state.go('login');
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
    }

    function appRun($rootScope, $urlRouter, loginService, logger) {
        $rootScope.$on('$stateChangeStart', function (e, toState) {
            if (!loginService.logged && !loginService.isPublic(toState)) {
                e.preventDefault();

                loginService.goToLogin()
                    .then(function () {
                        $rootScope.redirectState = toState.name;
                    })
            }
        })
    }
})();
