(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderController', OrderController);

    OrderController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function OrderController($q, dataservice, logger) {
        var vm = this;
        vm.title = '订单';
        vm.orders = [];
        vm.messageCount = 0;
        vm.isRightOpen = false;

        activate();

        function activate() {
            var promises = [getOrders()];
            return $q.all(promises).then(function() {
                console.log(vm.orders);
                logger.info('进入订单页面');
            });
        }

        function getOrders() {
            return dataservice.getOrders().then(function (data) {
                vm.orders = data;
                return vm.orders;
            });
        }
    }
})();
