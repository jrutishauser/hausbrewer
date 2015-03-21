'use strict';

angular.module('hausbrewer')
  .controller('LandCtrl', function (Auth) {
	var self = this;
	
 	Auth.onAuth(function(user){
		self.user = user;	
	});
  });
