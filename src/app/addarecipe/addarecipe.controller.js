'use strict';

angular.module('hausbrewer')
  .controller('addarecipeCtrl', function ($firebaseObject, $firebaseArray, Auth, $state) {
 	var self = this;	
	Auth.onAuth(function(user){
		self.user = user;	
	});
	var userRec = new Firebase('https://hausbrewer.firebaseio.com/recipes/'+ self.user.$id);
	this.obj = $firebaseArray(userRec);
	//this.newRec = {
	//	recipename: ''	
	//};
	Auth.loggedIn();	
	this.submitRecipe = function (rec) {
		this.obj.$add(rec);	
		$state.go('landing.recipe');	
	};
  });
