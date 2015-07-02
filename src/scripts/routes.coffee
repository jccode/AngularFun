class Config
	constructor: ($stateProvider, $urlRouterProvider) ->
		$stateProvider
			.state 'github',
				url: '/github/:id'
				controller: 'gitHubController'
				templateUrl: 'views/site.html'
				
			.state 'typography',
				url: '/typography',
				templateUrl: 'views/typography.html'
			
		$urlRouterProvider.otherwise '/typography'


angular.module('app').config ['$stateProvider', '$urlRouterProvider', Config]
