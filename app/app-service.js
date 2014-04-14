var earthServices = angular.module("earthServices", []);

earthServices.factory("messageService", function($http) {
    return {
        getMessages: function() {
            return $http.get("/service/messages.json").then(function(result) {
                return result.data;
            });
        },
        getMessage: function(id) {
            return $http.get("/service/messages/" + id + ".json").then(function(result) {
                return result.data;
            }, function (result) {
                return result.status;
            });
        }
    };
});