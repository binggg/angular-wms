(function () {
    'use strict';

    angular
        .module('app.spec')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'spec',
                config: {
                    url: '/spec',
                    templateUrl: 'app/spec/spec.html',
                    controller: 'ComponentController',
                    controllerAs: 'vm',
                    title: '查看配件规格',
                    settings: {
                        group: '采购管理',
                        icon: 'mdi-view-list'
                    }
                }
            },
            {
                state: 'spec-add',
                config: {
                    url: '/spec/add',
                    templateUrl: 'app/spec/spec.add.html',
                    controller: 'ComponentAddController',
                    controllerAs: 'vm',
                    title: '添加配件规格',
                    settings: {
                        group: '采购管理',
                        icon: 'mdi-plus-circle'
                    }
                }
            },
            {
                state: 'spec.detail',
                config: {
                    url: '/:id',
                    templateUrl: 'app/spec/spec.detail.html',
                    controller: 'ComponentDetailController',
                    controllerAs: 'vm',
                    title: '配件详情'
                }
            }
        ];
    }
})();
