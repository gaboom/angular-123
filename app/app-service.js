var myServices = angular.module("myServices", []);

myServices.factory("navigationService", function($http) {
	var lastTab = 0; // Default tab index
	return {
		getLastTab: function() {
			return lastTab;
		},
		setLastTab: function(index) {
			lastTab = index;
		}
	};
});