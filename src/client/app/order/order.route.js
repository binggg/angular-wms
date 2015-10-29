(function () {
    'use strict';

    angular
        .module('app.order')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'order',
                config: {
                    url: '/order',
                    templateUrl: 'app/order/order.html',
                    controller: 'OrderController',
                    controllerAs: 'vm',
                    title: '查看订单',
                    settings: {
                        group: '销售管理',
                        icon: 'mdi-view-list'
                    }
                }
            },
            {
                state: 'order-add',
                config: {
                    url: '/order/add',
                    templateUrl: 'app/order/order.add.html',
                    controller: 'OrderAddController',
                    controllerAs: 'vm',
                    title: '添加订单',
                    settings: {
                        group: '销售管理',
                        icon: 'mdi-plus-circle'
                    }
                }
            },
            {
                state: 'order.detail',
                config: {
                    url: '/:id',
                    templateUrl: 'app/order/order.detail.html',
                    controller: 'OrderDetailController',
                    controllerAs: 'vm',
                    title: '订单详情'
                }
            }
        ];
    }
})();
