'use strict';

angular.module('hausbrewer')
  .controller('SinglerecipeCtrl', function ($firebaseObject, $stateParams) {
		this.info = new Firebase('https://hausbrewer.firebaseio.com/recipes/'+ $stateParams.user + '/' + $stateParams.singlerecipe); 
		this.userInfo = $firebaseObject(this.info); 
		console.log(this.userInfo.grain1);  
  
  });
