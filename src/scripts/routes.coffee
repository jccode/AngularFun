class Config
	constructor: ($stateProvider, $urlRouterProvider) ->
		$stateProvider
			.state 'github',
				url: '/github/:id'
				abstract: true
				controller: 'gitHubController'
			
		$urlRouterProvider.otherwise '/github'


angular.module('app').config ['$stateProvider', '$urlRouterProvider', Config]
