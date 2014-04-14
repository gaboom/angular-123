var earthApp = angular.module("earthApp", [
    "ngRoute",
    "gettext",
    "earthControllers"
]);

earthApp.config(["$routeProvider",
    function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "/app/partials/home.html"
        }).when("/messages", {
            templateUrl: "/app/partials/messages.html",
            controller: "MessagesController"
        }).when("/messages/:messageId", {
            templateUrl: "/app/partials/message.html",
            controller: "MessageController"
        }).when("/locales", {
            templateUrl: "/app/partials/locales.html",
            controller: "MessageController"
        }).otherwise({
            redirectTo: "/"
        });
    }]);