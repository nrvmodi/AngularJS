angular.module('ContactsApp')
	.factory('ContactService',function(){
		var factory = [];
		factory.getContacts = function(){
			return contactList;
		};
		var contactList = [
		                    {id:['1','text'],firstName:['nirav','text'], lastName:['modi','text'],email:['nrv@contacts.com','email'],address:['Veravas','text']},
				        	{id:['2','text'],firstName:['Mayank','text'],lastName:['Rupareliya','text'],email:['myk@contacts.com','email'],address:['Junagadh','text']}, 
				        	{id:['3','text'],firstName:['Kedar','text'], lastName:['Parikh','text'],email:['Kedar@contacts.com','email'],address:['Baroda','text']}, 
				        	{id:['4','text'],firstName:['Anand','text'], lastName:['Shah','text'],email:['Anand@contacts.com','email'],address:['Baroda','text']}, 
						    {id:['5','text'],firstName:['Nihar','text'], lastName:['Dave','text'],email:['Nihar@contacts.com','email'],address:['ahmedabad','text']}
		                   ];
		 return factory;
	});