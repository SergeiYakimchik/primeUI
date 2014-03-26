define(['appModule'], function(Prime)
{
	Prime.lazy.directive('puiAccordion', 
	[
	 	function(){
	 		
	 		return {
	 			restrict: 'A',

	 	        replace: true,

	 	        compile: function (element, attrs, transclude) {
	 	            $(function () {
	 	                element.puiaccordion();
	 	            });
	 	        }
	 	    };
	 	    
	 	}
	]);
});