angular.module('ContactsApp')
	.factory('ContactService',function(){
		var factory = [];
		factory.getContacts = function(){
			return contactList;
		};
		var contactList = [
		                    {id:'1',firstName:'nirav', lastName:'modi'},
				        	{id:'2',firstName:'Mayank',lastName:'Rupareliya'}, 
				        	{id:'3',firstName:'Kedar', lastName:'Parikh'}, 
				        	{id:'4',firstName:'Anand', lastName:'Shah'}, 
						    {id:'5',firstName:'Nihar', lastName:'Dave'}
		                   ];
		 return factory;
	});