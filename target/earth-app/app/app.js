var earthApp = angular.module("earthApp", [
    "ngRoute",
    "gettext",
    "earthControllers",
    "earthFilters"
]);

earthApp.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/partials/home.html"
    }).when("/messages", {
        templateUrl: "app/partials/messages.html",
        controller: "MessagesController"
    }).when("/messages/:messageId", {
        templateUrl: "app/partials/message.html",
        controller: "MessageController"
    }).when("/locales", {
        templateUrl: "app/partials/locales.html"
    }).otherwise({
        redirectTo: "/"
    });
});

earthApp.run(function ($rootScope, gettextCatalog) {
    gettextCatalog.currentLanguage = 'en';
    gettextCatalog.debug = true;
    
    $rootScope.switchCurrentLanguage=function(language) {
        gettextCatalog.currentLanguage=language;
    };
});