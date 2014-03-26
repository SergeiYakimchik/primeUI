define(['appModule'], function(Prime)
{
	Prime.lazy.directive('puiInputtext', 
	[
	 	function(){
	 		
	 		return {
	 			restrict: 'A',

	 	        replace: true,

	 	        compile: function (element, attrs, transclude) {
	 	            $(function () {
	 	                element.puiinputtext();
	 	            });
	 	        }
	 	    };
	 	    
	 	}
	]);
});