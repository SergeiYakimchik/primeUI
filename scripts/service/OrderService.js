define(['appModule'], function(app)
{
	app.lazy.service('OrderService', 
	[
	 	'$http',
	 	
	 	function($http){
	 	
	 		var send = function() {
	 			
			};
			
	 		return {
	 			send : function() {
	 				return send();
	 			}
	 		};		
	 	}
	]);
});