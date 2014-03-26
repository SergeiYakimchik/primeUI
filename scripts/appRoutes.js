define([], function () {
    return {
        defaultRoutePath: "/",
        defaultDependencies: [
                              'directive/panel',
                              "controller/PageController"
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