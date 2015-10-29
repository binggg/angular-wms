(function () {
    'use strict';

    angular
        .module('app.component')
        .controller('ComponentAddController', ComponentAddController);

    ComponentAddController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function ComponentAddController($q, dataservice, logger) {
        var vm = this;
        vm.products = [];
        vm.submitOrderAdd = submitOrderAdd;
        vm.chooseProduct = {
            simulateQuery: false,
            isDisabled: false,
            products: loadAll(),
            querySearch: querySearch,
            selectedItemChange: selectedItemChange,
            searchTextChange: searchTextChange
        };
        vm.totalProSell = getTotalProSell;
        vm.totalProCost = getTotalProCost;
        vm.removeProduct = removeProduct;

        activate();

        function activate() {
            vm.wechats = [
                'wechat for test',
                'wechat for test1',
                'wechat for test2'
            ];
            vm.payways = [
                'xxxxx',
                '支付宝'
            ];
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(item) {
                return (item.name.indexOf(lowercaseQuery) !== -1);
            }
        }

        function getTotalProSell() {
            var result = 0;
            for (var i in vm.products) {
                result += vm.products[i].price * ( vm.products[i].qty || 1);
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
                vm.chooseProduct.products = data;
                return vm.messageCount;
            });
        }

        function querySearch(query) {
            var results = query ? vm.chooseProduct.products.filter(createFilterFor(query)) : vm.chooseProduct.products;
            return results;
        }

        function removeProduct(index) {
            vm.products.splice(index, 1);
        }

        function searchTextChange(text) {

        }

        function selectedItemChange(item) {
            if (item) {
                var cloneItem = _.extend({}, item);
                cloneItem.cost = function () {
                    var result = 0;
                    for (var i in cloneItem.components) {
                        var component = cloneItem.components[i];
                        result += component.price * component.qty;
                    }
                    return result;
                };
                vm.products.unshift(cloneItem);
            }
        }

        function submitOrderAdd() {
            logger.info(JSON.stringify(vm.products));
        }
    }
})();
