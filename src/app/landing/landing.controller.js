'use strict';

angular.module('hausbrewer')
  .controller('LandCtrl', function (Auth) {
	console.log('landing page!');
 	Auth.onAuth(function(user){
		//console.log(this.auth);	
	});
	console.log('banana');
  });
