(function () {
    'use strict';

    angular
        .module('app.product')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function ProductController($q, dataservice, logger) {
        var vm = this;
        vm.products = [];

        activate();

        function activate() {
            var promises = [getProducts()];
            return $q.all(promises).then(function() {
                logger.info('产品已加载就绪');
            });
        }

        function getProducts() {
            return dataservice.getProducts().then(function (data) {
                vm.products = data;
                return vm.products;
            });
        }
    }
})();
