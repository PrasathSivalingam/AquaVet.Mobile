require.config({
    baseUrl: '/App',
    paths: {
        'text': '../scripts/text',
        'durandal': '../scripts/durandal',
        'plugins': '../scripts/durandal/plugins',
        'transitions': '../scripts/durandal/transitions',
        'knockout': '../scripts/knockout-3.1.0',
        'jquery': '../scripts/jquery-2.1.0',
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});

define('jquery', [], function () { return jQuery; });
define('knockout', [], function () { return ko; });

require(['main'], function (main,$) {

    return main;

});