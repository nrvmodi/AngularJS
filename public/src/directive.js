angular.module('ContactsApp')
		.value('FieldTypes',function(){
			var FieldTypes = [];
			FieldTypes = [
			              	{text :['text','should be a text']},
			              	{email :['email','should be an email']},
			              ];
		})
		.directive('formField',function(FieldTypes){
			return {
				restrict:'EA',
				replace:true,
				templateUrl:'views/form-field.html',
				scope : {
					record:'=',
					live:'@',
					required:'@',
					field:'@'
				},
				link:function($scope,element,attr){
					$scope.types = FieldTypes;
				}
			};
		});
		
	