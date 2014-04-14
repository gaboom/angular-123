var earthControllers = angular.module("earthControllers", ["earthServices"]);

earthControllers.controller("MessagesController", function($scope, messageService) {
    messageService.getMessages().then(function(messages) {
        $scope.messages = messages;
    });
});

earthControllers.controller("MessageController", function($scope, $routeParams, messageService) {
    messageService.getMessage($routeParams.messageId).then(function(message) {
        $scope.error = typeof message === "number";
        $scope.message = message;
    });
});