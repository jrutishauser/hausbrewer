'use strict';

angular.module('hausbrewer')
  .controller('RecipeCtrl', function ($firebaseObject, $firebaseArray, $stateParams, Auth) {
  		 var self = this;
		Auth.onAuth(function(user, authdUser){
			self.user = user;
		});
		var recList = new Firebase('https://hausbrewer.firebaseio.com/recipes/' + self.user.$id);
		this.recArray = $firebaseArray(recList);	
  		});
