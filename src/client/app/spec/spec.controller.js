(function () {
    'use strict';

    angular
        .module('app.spec')
        .controller('SpecController', SpecController);

    SpecController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function SpecController($q, dataservice, logger) {
        var vm = this;
        vm.specs = [];

        activate();

        function activate() {
            var promises = [getSpecs()];
            return $q.all(promises).then(function() {

            });
        }

        function getSpecs() {
            return dataservice.getSpecs().then(function (data) {
                vm.specs = data;
                return vm.specs;
            });
        }
    }
})();
