define([], function()
{
    return {
        defaultRoutePath: '/',

        defaultDependencies: [
             'directive/panel',
             'controller/PageController'
        ],

        routes: {
            '/index': {
                templateUrl: 'index.html',
                dependencies: [
                ]
            }
        }
    };
});