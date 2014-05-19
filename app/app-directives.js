var myDirectives = angular.module("myDirectives", []);

myDirectives.directive('ngTabs', function($location, $timeout, navigationService) {
	return {
		restrict: 'A',
		scope: {
		},
		link: function($scope, $element, $attributes) {
			var options = {};

			// Select default tab
			var searchParams = $location.search();
			options.active = searchParams["tabActive"] ? searchParams["tabActive"] : navigationService.getLastTab();

			// Update URL on tab change
			options.activate = function(event, ui) {
				var index = $(event.target).tabs("option", "active");
				$timeout(function() {
					$scope.active = index;
				});
			};

			// Update tab on URL change
			$scope.$on('$locationChangeSuccess', function() {
				var searchParams = $location.search();
				if (searchParams.hasOwnProperty("tabActive")) {
					var index = searchParams["tabActive"];
					$scope.active = index;
				}
			});

			// UI binding
			$scope.$watch("active", function(index) {
				if (index !== undefined) {
					navigationService.setLastTab(index);
					$location.search('tabActive', index);
					$element.tabs("option", "active", index);
				}
			});

			// Activate tabs
			$element.tabs(options);
		}
	};
});