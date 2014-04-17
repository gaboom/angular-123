describe("earth controller messages", function() {
    beforeEach(module("earthApp")); 
    
    var $scope, deferred, sut, messages = ["somevalue"];
    
    beforeEach(inject(function($controller, $rootScope, $q) {
        $scope = $rootScope.$new();
        
        var messageService = jasmine.createSpyObj('CompanyService', ['getMessages']);
        messageService.getMessages.andCallFake(function () {
            deferred = $q.defer();
            return deferred.promise;  
        });
        
        sut = $controller('MessagesController', {
            '$scope': $scope,
            'messageService': messageService
        });
    }));
    
    it('should be in the scope', function() {
        deferred.resolve(messages);
        $scope.$digest();
        
        expect($scope.messages).toBe(messages);
        expect($scope.count).toBe(messages.length);
    });
});