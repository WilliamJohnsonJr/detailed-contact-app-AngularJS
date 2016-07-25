function config ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('root', {
			templateUrl: 'templates/layout.tpl.html',
			abstract: true
		})
		.state('root.home',{
			url: '/',
			templateUrl: 'templates/home.tpl.html',	
			controller: 'HomeController as vm'
		})
	$urlRouterProvider.otherwise('/'); 
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };