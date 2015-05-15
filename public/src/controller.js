angular.module('ContactsApp')
	.value('Fields',{
		id:['','text'],
		firstName:['','text'],
		lastName:['','text'],
		email:['','email'],
		address:['','text']
	})
	.controller('ListController',function($scope,$rootScope,ContactService,$location,Fields){
		$scope.contacts = ContactService.getContacts();
		$rootScope.PAGE = 'list';
		var fields = [];
		angular.forEach(Fields,function(val,key){
			var field = {name:'',type:''};
			field.name = key;
			field.type = val[1];
			fields.push(field);
		});
		
		$scope.fields = fields;
		
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
	.controller('NewContactController',function($scope,$rootScope,$location,ContactService,Fields){
		$rootScope.PAGE = 'new';
		$scope.contact= Fields;
		$scope.contacts = ContactService.getContacts();
		
		//Save Function to save list
		$scope.save=function(){
			$scope.contact.id[0] = $scope.contacts.length+1+'';
			console.log($scope.contact);//{id: Array[2], firstName: Array[2], lastName: Array[2], email: Array[2], address: Array[2]}
			$scope.contacts.push($scope.contact);
			$location.url('/contacts');
		};
	})
	.controller('ViewController',function($scope,ContactService,$routeParams,$location,Fields){
		$scope.fields= Fields;
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
		
		$scope.edit=function(id){
			$location.url('/contacts/edit/'+id);
		};
		
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
	.controller('EditController',function($scope,$routeParams,$rootScope,$location,ContactService,Fields){
		$rootScope.PAGE = 'edit';
		var contacts = ContactService.getContacts();
		
		var id = $routeParams.id;
		var index='';
		if(contacts){
			for(var i in contacts){
				var contact = contacts[i];
				if(contact.id == id){
					$scope.contact = contact;
					index = i;
					break;
				}
			}
		}
		
		//Save Function to save list
		$scope.edit=function(){
			contacts.splice(index,1);
			console.log($scope.contact);//{id: Array[2], firstName: Array[2], lastName: Array[2], email: Array[2], address: Array[2]}
			contacts.push($scope.contact);
			$location.url('/contacts');
		};
	})
	;