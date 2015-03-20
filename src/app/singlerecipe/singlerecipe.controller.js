(function(){
'use strict';
angular.module('hausbrewer')
  .controller('SinglerecipeCtrl', function ($firebaseObject, $stateParams) {
		var info = new Firebase('https://hausbrewer.firebaseio.com/recipes/' + 
			$stateParams.user + '/' + $stateParams.singlerecipe); 
		this.userInfo = $firebaseObject(info); 
		var self = this;	
		this.step = 1;
		this.stepfor = function(){
			if (self.step === 7) {
				return;
			} else {
				self.step++;
				return self.step;
			}	
		};	
		this.stepback = function(){
			if (self.step === 1) {
				return; 
			} else {	
				self.step--;
				return self.step;
			}	
		};
  });
})();
