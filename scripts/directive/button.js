define(['appModule'], function(Prime)
{
	Prime.lazy.directive('puiButton', 
	[
	 	function(){
	 		
	 		return {
	 			restrict: 'A',

	 	        replace: true,

	 	        compile: function (element, attrs, transclude) {
	 	            $(function () {
	 	                element.puibutton();
	 	            });
	 	        }
	 	    };
	 	    
	 	}
	]);
});