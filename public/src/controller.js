angular.module('ContactsApp')
	.controller('ListController',function($scope,ContactService,$location){
		$scope.contacts = ContactService.getContacts();
		
		$scope.fields=[
           {name:'firstName',type:'string'},
           {name:'lastName',type:'string'}
		];
		
		$scope.sort=function(field){
			$scope.sort.field=field;
			$scope.sort.order=!$scope.sort.order;
		};
		
		$scope.sort.field='firstName';
		$scope.sort.order=false;
		
		$scope.show=function(id){
			$location.url('/contacts/'+id);
		};
	})
	.controller('NewContactController',function($scope,$rootScope,$location,ContactService){
		$scope.contact= {
			id:'',
			firstName:'',
			lastName:''
		};
		$scope.contacts = ContactService.getContacts();
		
		//Save Function to save list
		$scope.save=function(){
			$scope.contact.id = $scope.contacts.length+1;
			$scope.contacts.push($scope.contact);
			$location.url('/contacts');
		};
	})
	.controller('ViewController',function($scope,ContactService,$routeParams,$location){
		var id = $routeParams.id;
		var contacts = ContactService.getContacts();
		if(contacts){
			for(var index in contacts){
				var contact = contacts[index];
				if(contact.id == id){
					$scope.contact = contact;
					break;
				}
			}
		}
		
		$scope.remove= function (id){
			var contacts = ContactService.getContacts();
			if(contacts){
				for(var index in contacts){
					var contact = contacts[index];
					if(contact.id == id){
						contacts.splice(index,1);
						break;
					}
				}
			}
			$location.url('/contacts');
		};
	})
	;