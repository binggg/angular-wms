(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderDetailController', OrderDetailController);

    OrderDetailController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function OrderDetailController($q, dataservice, logger) {
        var vm = this;

        activate();

        function activate() {
            vm.isRightOpen = true;
        }

    }
})();
