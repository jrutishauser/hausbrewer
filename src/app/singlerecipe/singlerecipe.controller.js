(function(){
'use strict';

angular.module('hausbrewer')
  .controller('SinglerecipeCtrl', function ($firebaseObject, $stateParams) {
		var info = new Firebase('https://hausbrewer.firebaseio.com/recipes/' + 
			$stateParams.user + '/' + $stateParams.singlerecipe); 
		this.userInfo = $firebaseObject(info); 
		var step = 1;
		console.log(step);	
		this.stepfor = function(){
			if (step === 10) {
				return;
			} else {
				step++;
				console.log(step);
				return step;
			}	
		};	
		this.stepback = function(){
			if (step === 1) {
				return; 
			} else {	
				step--;
				console.log(step);
				return step;
			}	
		};
		console.log(step);
  
  });
})();
