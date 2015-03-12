'use strict';

angular.module('hausbrewer')
	.factory('Auth', function($firebaseObject){
		var auth = new Firebase('https://hausbrewer.firebaseio.com/');
		var currentUser = {};	
		
	return {
		onAuth: function(creds){
			auth.onAuth(function(data){
				creds(updateUser(data));
			});
		},
		fbLogin: function(){
		
			return auth.authWithOAuthPopup("facebook", function(error, authData){
				console.log(authData);
			if (error) {
			console.log('Login Failed!', error);
			} else {
				console.log('Authenticated successfully with payload, authData');
			}
			}, {remember: 'sessionOnly'});
		},
		logout: function(){
			auth.unauth();
			console.log('goodbye');
		},
		loggedIn: function(){
			if(auth.getAuth()){
				return true;
			}
		}	
	};
	function updateUser(authdUser){
		console.log(authdUser);
	if ( authdUser === null){
		return null;	
	}
	}	
	})
	;//end it all
