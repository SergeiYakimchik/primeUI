define([], function () {
    return {
        defaultRoutePath: "/",
        defaultDependencies: [
                              'directive/accordion',
                              'directive/button',
                              'directive/inputtext',
                              'directive/menubar',
                              'directive/panel',
                              'directive/table',
                              'controller/PageController'
                              ],
        routes: {
            "/vacation": {
                templateUrl: "views/vacation.html",
                dependencies: [
                               ]
            },
            "/about": {
                templateUrl: "views/about.html",
                dependencies: []
            }
        }
    }
})