(function () {
    'use strict';

    angular
        .module('app.product')
        .controller('ProductAddController', ProductAddController);

    ProductAddController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function ProductAddController($q, dataservice, logger) {
        var vm = this;
        vm.components = [];
        vm.submitOrderAdd = submitOrderAdd;
        vm.chooseComponent = {
            simulateQuery: false,
            isDisabled: false,
            components: loadAll(),
            querySearch: querySearch,
            selectedItemChange: selectedItemChange,
            searchTextChange: searchTextChange
        };
        vm.totalPrice = getTotalPrice;
        vm.totalProCost = getTotalProCost;
        vm.removeComponent = removeComponent;

        activate();

        function activate() {
            return $q.all([getProductTypes()]).then(function() {
                logger.info('Activated Product Add View');
            });
        }

        function getProductTypes() {
            return dataservice.getProductTypes().then(function (data) {
                vm.productTypes = data;
                return vm.productTypes;
            });
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(item) {
                return (item.name.indexOf(lowercaseQuery) !== -1);
            }
        }

        function getTotalPrice() {
            var result = 0;
            for (var i in vm.components) {
                result += vm.components[i].price * ( vm.components[i].qty || 1);
            }
            return result;
        }

        function getTotalProCost() {
            var result = 0;

            for (var i in vm.products) {
                var product = vm.products[i];
                result += product.cost() * ( product.qty || 1);
            }

            return result;
        }

        function loadAll() {
            return dataservice.getComponents().then(function (data) {
                vm.chooseComponent.components = data;
                return vm.chooseComponent;
            });
        }

        function querySearch(query) {
            var results = query ? vm.chooseComponent.components.filter(createFilterFor(query)) : vm.chooseComponent.components;
            return results;
        }

        function removeComponent(index) {
            vm.components.splice(index, 1);
        }

        function searchTextChange(text) {

        }

        function selectedItemChange(item) {
            if (item) {
                var cloneItem = _.extend({}, item);
                vm.components.unshift(cloneItem);
            }
        }

        function submitOrderAdd() {
            logger.info(JSON.stringify(vm.compoents));
        }
    }
})();
