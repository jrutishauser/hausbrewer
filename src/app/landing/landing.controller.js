'use strict';

angular.module('hausbrewer')
  .controller('LandCtrl', function (Auth) {
	var self = this;
	
	console.log('landing page!');
 	Auth.onAuth(function(user){
		self.user = user;	

	});
	//console.log(users.authdUser);
  });
