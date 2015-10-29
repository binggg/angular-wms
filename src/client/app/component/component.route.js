(function () {
    'use strict';

    angular
        .module('app.component')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'component',
                config: {
                    url: '/component',
                    templateUrl: 'app/component/component.html',
                    controller: 'ComponentController',
                    controllerAs: 'vm',
                    title: '查看配件',
                    settings: {
                        group: '采购管理',
                        icon: 'mdi-view-list'
                    }
                }
            },
            {
                state: 'component-add',
                config: {
                    url: '/component/add',
                    templateUrl: 'app/component/component.add.html',
                    controller: 'ComponentAddController',
                    controllerAs: 'vm',
                    title: '添加配件',
                    settings: {
                        group: '采购管理',
                        icon: 'mdi-plus-circle'
                    }
                }
            },
            {
                state: 'component.detail',
                config: {
                    url: '/:id',
                    templateUrl: 'app/component/component.detail.html',
                    controller: 'ComponentDetailController',
                    controllerAs: 'vm',
                    title: '配件详情'
                }
            }
        ];
    }
})();
