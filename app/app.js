var myApp = angular.module("myApp", [
    "ngRoute",
    "myDirectives",
    "myServices"
]);

myApp.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/partials/welcome.html"
    }).when("/transient_subview", {
        templateUrl: "app/partials/transient.html"
    }).when("/persistent_subview", {
        templateUrl: "app/partials/persistent.html",
	reloadOnSearch: false
    }).otherwise({
        redirectTo: "/"
    });
});