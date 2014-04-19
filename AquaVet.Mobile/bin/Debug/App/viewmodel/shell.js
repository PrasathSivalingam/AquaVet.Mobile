define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: 'assessment/assessmentlist', moduleId: 'viewmodel/assessment/assessmentlist', title: 'Hello World', nav: true }
                //{ route: 'view-composition',            moduleId: 'viewComposition/index',  title: 'View Composition',  nav: true },
                //{ route: 'modal',                       moduleId: 'modal/index',            title: 'Modal Dialogs',     nav: 3 },
                //{ route: 'event-aggregator',            moduleId: 'eventAggregator/index',  title: 'Events',            nav: 2 },
                //{ route: 'widgets',                     moduleId: 'widgets/index',          title: 'Widgets',           nav: true },
                //{ route: 'master-detail',               moduleId: 'masterDetail/index',     title: 'Master Detail',     nav: true },
                //{ route: 'knockout-samples*details',    moduleId: 'ko/index',               title: 'Knockout Samples',  nav: true, hash: '#knockout-samples' }
            ]).buildNavigationModel()
              .mapUnknownRoutes('viewmodel/assessment/assessmentlist', 'not-found')
              .activate();
        }
    };
});