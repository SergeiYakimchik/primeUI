define(['appModule'], function(Prime)
{
	Prime.lazy.directive('puiMenubar', 
	[
	 	function(){
	 		
	 		return {
	 			restrict: 'A',

	 	        replace: true,

	 	        compile: function (element, attrs, transclude) {
	 	            $(function () {
	 	                element.puimenubar();
	 	            });
	 	        }
	 	    };
	 	    
	 	}
	]);
});