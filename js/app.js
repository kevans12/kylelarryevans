angular.module('kyleevans', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "./views/home.html",
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .state('about',{
                url:'/about',
                templateUrl: "./views/about.html",
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })

        $urlRouterProvider
            .otherwise('/');
    });
