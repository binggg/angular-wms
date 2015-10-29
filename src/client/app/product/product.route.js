(function () {
    'use strict';

    angular
        .module('app.product')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'product',
                config: {
                    url: '/product',
                    templateUrl: 'app/product/product.html',
                    controller: 'ProductController',
                    controllerAs: 'vm',
                    title: '查看产品',
                    settings: {
                        group: '产品管理',
                        icon: 'mdi-view-list'
                    }
                }
            },
            {
                state: 'product-add',
                config: {
                    url: '/product/add',
                    templateUrl: 'app/product/product.add.html',
                    controller: 'ProductAddController',
                    controllerAs: 'vm',
                    title: '添加产品',
                    settings: {
                        group: '产品管理',
                        icon: 'mdi-plus-circle'
                    }
                }
            },
            {
                state: 'product.detail',
                config: {
                    url: '/:id',
                    templateUrl: 'app/product/product.detail.html',
                    controller: 'ProductDetailController',
                    controllerAs: 'vm',
                    title: '产品详情'
                }
            }
        ];
    }
})();
