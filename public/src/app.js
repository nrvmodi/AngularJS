angular.module('ContactsApp',['ngRoute','ngMessages'])
	.config(function($routeProvider,$locationProvider){
			$routeProvider.when('/contacts',{
				controller:'ListController',
				templateUrl:'views/list.html'
			});
			
			$routeProvider.when('/contacts/new',{
				controller:'NewContactController',
				templateUrl:'views/newContact.html'
			});
			
			$routeProvider.when('/contacts/:id',{
				controller:'ViewController',
				templateUrl:'views/viewContact.html'
			});
			
			$routeProvider.when('/contacts/edit/:id',{
				controller:'EditController',
				templateUrl:'views/editContact.html'
			});
			$locationProvider.html5Mode(true);
	});
	/*.run(function($rootScope){
		$rootScope.message='Hello Angular !!'
	});*/