angular.module('kyleevans', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "./views/home.html",
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .state('aboutMe',{
                url:'/aboutMe',
                templateUrl: "./views/about.html",
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })

        $urlRouterProvider
            .otherwise('/');
    });
