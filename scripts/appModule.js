define(["appRoutes", "service/lazyDependencyResolver"], function (config, lazyDependencyResolver) {
    var Prime = angular.module("Prime", []);
    
    Prime.server = "http://localhost:8080/web-service/";
    
    Prime.config(["$routeProvider", 
              "$locationProvider", 
              "$controllerProvider", 
              "$compileProvider", 
              "$filterProvider", 
              "$provide", 
              "$httpProvider",
        function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {
            Prime.lazy = {};
            
            Prime.lazy.controller = $controllerProvider.register;
            Prime.lazy.directive  = $compileProvider.directive;
            Prime.lazy.filter     = $filterProvider.register;
            Prime.lazy.factory    = $provide.factory;
            Prime.lazy.service    = $provide.service;
            
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

            $routeProvider.otherwise({redirectTo: '/index'});
        }
    ]);
    return Prime
})