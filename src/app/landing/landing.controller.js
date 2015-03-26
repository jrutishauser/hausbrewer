'use strict';

angular.module('hausbrewer')
  .controller('LandCtrl', function (Auth) {
	var self = this;
	
 	Auth.onAuth(function(user){
		self.user = user;	
	});
	Auth.loggedIn();
	this.selected = 1;
	this.select = function(item) {
		this.selected = item;
	};
  });
