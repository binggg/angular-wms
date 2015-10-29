(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var status = 'mock';

        var service = {
            getOrders: getOrders,
            getProducts: getProducts,
            getProductTypes: getProductTypes,
            getPayways: getPayways,
            getWechats: getWechats,
            getComponents: getComponents,
            getSpecs: getSpecs
        };

        return service;

        function getOrders() {
            return wrapFn(real, 'getOrders');

            function real() {
                return $http.get('/users/order')
                    .then(success)
                    .catch(fail);

                function success(response) {
                    return response.data;
                }

                function fail(e) {
                    return exception.catcher('XHR Failed for getOrders')(e);
                }
            }
        }

        function getProducts() {
            return wrapFn(real, 'getProducts');

            function real() {
                return $http.get('/users/order')
                    .then(success)
                    .catch(fail);

                function success(response) {
                    return response.data;
                }

                function fail(e) {
                    return exception.catcher('XHR Failed for getOrders')(e);
                }
            }
        }

        function getProductTypes() {
            return wrapFn(null, 'getProductTypes')
        }

        function getPayways() {
            return wrapFn(null, 'getPayways')
        }

        function getWechats() {
            return wrapFn(null, 'getWechats')
        }

        function getComponents() {
            return wrapFn(null, 'getComponents');
        }

        function getSpecs () {
            return wrapFn(null, 'getSpecs');
        }

        function wrapFn(real, fake, args) {
            if (status === 'mock') {
                if (fake) {
                    return $q.when(mockData[fake]());
                }
            } else {
                if (typeof real === 'function') {
                    return real(args);
                }
            }

        }

    }
})();
