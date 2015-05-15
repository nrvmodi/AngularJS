angular.module('ContactsApp')
		.filter('labelCase',function(){
			return function(input){
				input = input.replace(/([A-Z])/g, ' $1');
				return input[0].toUpperCase()+input.slice(1);
			};
		})
		.filter('upperCase',function(){
			return function(input){
				return input.toUpperCase();
			};
		}).filter('keyFilter',function(){
			return function(obj,query){
				var result = {};
				angular.forEach(obj,function(val,key){
					if(query !== key){
						result[key]=val;
					}
				});
				return result;
			}
		})
		;
	