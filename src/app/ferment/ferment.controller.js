'use strict';

angular.module('hausbrewer')
  .controller('FermentCtrl', function ($firebaseObject, $firebaseArray, Auth) {
   		var self = this;
		Auth.onAuth(function(user){
			self.user = user;	
		});
	var fermlist = new Firebase('https://hausbrewer.firebaseio.com/ferm/' +
							   			 self.user.$id);
		this.fermArray = $firebaseArray(fermlist);	 
  });
