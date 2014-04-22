require.config({
    baseUrl: '/App',
    paths: {
        'text': '../scripts/text',
        'durandal': '../scripts/durandal',
        'plugins': '../scripts/durandal/plugins',
        'transitions': '../scripts/durandal/transitions',
        'bootstrap': '../scripts/bootstrap',
        'knockout': '../scripts/knockout-3.1.0',
        'jquery': '../scripts/jquery-2.1.0',
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);


define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'plugins/router', 'services/logger'],
    function(app, viewLocator, system, router, logger) {

        // Enable debug message to show in the console 
        system.debug(true);

        app.title = 'AquaVet';
        // Specify which plugins to install und their configuation
        app.configurePlugins({
            router: true,
            dialog: true,
            widget: true
        });

        var phonegapApp = {
            // Application Constructor
            initialize: function () {
                this.bindEvents();
            },
            // Bind Event Listeners
            //
            // Bind any events that are required on startup. Common events are:
            // 'load', 'deviceready', 'offline', and 'online'.
            bindEvents: function () {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },
            // deviceready Event Handler
            //
            // The scope of 'this' is the event. In order to call the 'receivedEvent'
            // function, we must explicity call 'app.receivedEvent(...);'
            onDeviceReady: function () {
                phonegapApp.receivedEvent('deviceready');
            },
            // Update DOM on a Received Event
            receivedEvent: function (id) {
                var parentElement = document.getElementById(id);
                var listeningElement = parentElement.querySelector('.listening');
                var receivedElement = parentElement.querySelector('.received');

                listeningElement.setAttribute('style', 'display:none;');
                receivedElement.setAttribute('style', 'display:block;');

                console.log('Received Event: ' + id);
            }
        };
        


        app.start().then(function() {

            // Q shim
            system.defer = function(action) {
                var deferred = Q.defer();
                action.call(deferred, deferred);
                var promise = deferred.promise;
                deferred.promise = function() {
                    return promise;
                };

                return deferred;
            };

            //toastr.options.positionClass = 'toast-bottom-right';
            //toastr.options.backgroundpositionClass = 'toast-bottom-right';

            //router.handleInvalidRoute = function(route, params) {
            //    logger.logError('No Route Found', route, 'main', true);
            //};

            // When finding a viewmodel module, replace the viewmodel string 
            // with view to find it partner view.
            viewLocator.useConvention();

            //Show the app by setting the root view model for our application.
            app.setRoot('viewmodels/shell', 'entrance');
            phonegapApp.initialize();
        });
    });