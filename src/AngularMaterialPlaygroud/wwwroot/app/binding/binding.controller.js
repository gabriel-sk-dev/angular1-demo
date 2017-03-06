(function () {
    angular
        .module('angularApp')
        .controller('angularAppBindingController', angularAppBindingController);

    function angularAppBindingController() {
        var vm = this;

        activate();

        function activate() {
            vm.QualquerValor = "";
        }
    }


})();