require.config({
    baseUrl: 'scripts',
    paths: {}
});

require
(
    [
        'appModule'
    ],
    function(Prime)
    {
        angular.prime(document, ['Prime']);
    }
);