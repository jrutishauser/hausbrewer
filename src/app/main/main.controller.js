'use strict';

angular.module('hausbrewer')
  .controller('MainCtrl', function ($firebaseArray, $firebaseObject, Auth) {
		var self = this;
		var userInfo = new Firebase('https://hausbrewer.firebaseio.com/users');
 
	this.obj = $firebaseArray(userInfo);
	console.log(this.obj);

	this.userArray = {};
	
	this.fbLogin = Auth.fbLogin;

	Auth.onAuth(function(user){
		self.user = user;
	if (user === null){
		console.log('null');
	} else {
		console.log(user);
	}
	});
  });
