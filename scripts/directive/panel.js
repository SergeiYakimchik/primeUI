define(['appModule'], function(Prime)
{
	Prime.lazy.directive('panel', 
	[
	 	function(){
	 		
	 		return {
	 			restrict: 'A',

	 	        replace: true,

	 	        compile: function (element, attrs, transclude) {
	 	            $(function () {
	 	                element.puipanel();
	 	            });
	 	        }
	 	    };
	 	    
	 	}
	]);
});