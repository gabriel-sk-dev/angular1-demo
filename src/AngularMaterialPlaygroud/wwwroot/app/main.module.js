(function () {
    // Criar modulo principal da aplicação
    angular.module('angularApp', [
        'ui.router'
    ]);
    
    // Criar rotina para configurar o módulo principal
    angular
        .module('angularApp')
        .config(configAngularapp);

    // Funcção que será executada para configurar a aplicação
    configAngularapp.$inject = ['$stateProvider'];
    function configAngularapp($stateProvider) {

        // Configurar rotas para acesso aos controllers e paginas
        $stateProvider
                    .state('home',
                        {
                            url: "/home",
                            templateUrl: "app/home.html",
                            controller: "angularAppHomeController",
                            controllerAs: "vm"
                        })
                    .state('list',
                        {
                            url: "/list",
                            templateUrl: "app/listagens/list.home.html",
                            controller: "angularAppListController",
                            controllerAs: "vm"
                        })
                    .state('binding',
                        {
                            url: "/binding",
                            templateUrl: "app/binding/binding.home.html",
                            controller: "angularAppBindingController",
                            controllerAs: "vm"
                        });
    }

    

})();