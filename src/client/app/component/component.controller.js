(function () {
    'use strict';

    angular
        .module('app.component')
        .controller('ComponentController', ComponentController);

    ComponentController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function ComponentController($q, dataservice, logger) {
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
