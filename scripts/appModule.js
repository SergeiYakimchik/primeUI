define(["appRoutes", "service/lazyDependencyResolver"], function (config, lazyDependencyResolver) {
    var app = angular.module("app", ['ngRoute', 'angular.prime']);
    
    app.server = "http://localhost:8080/web-service/";
    
    app.config(["$routeProvider", 
              "$locationProvider", 
              "$controllerProvider", 
              "$compileProvider", 
              "$filterProvider", 
              "$provide", 
              "$httpProvider",
        function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {
    		app.lazy = {};
            
    		app.lazy.controller = $controllerProvider.register;
    		app.lazy.directive  = $compileProvider.directive;
    		app.lazy.filter     = $filterProvider.register;
    		app.lazy.factory    = $provide.factory;
    		app.lazy.service    = $provide.service;
            
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
            angular.forEach(config.routes, function(route, path)
                    {
                        $routeProvider.when(
                            path, 
                            {
                                templateUrl:route.templateUrl, 
                                resolve:lazyDependencyResolver(config.defaultDependencies.concat(route.dependencies))
                            }
                        )
                    });

            $routeProvider.otherwise({redirectTo: '/vacation'});
        }
    ]);
    return app
})