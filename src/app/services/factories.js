'use strict';

angular.module('hausbrewer')
	.factory('Auth', function($firebaseObject, $state){
		var auth = new Firebase('https://hausbrewer.firebaseio.com/');
		var currentUser = {};	
		
	return {
		onAuth: function(creds){
			auth.onAuth(function(data){
				creds(updateUser(data));
			});
		},
		fbLogin: function(){
		
			return auth.authWithOAuthPopup('facebook', function(error, authData){
				console.log(authData);
			if (error) {
			console.log('Login Failed!', error);
			} else {
				$state.go('landing.recipe');
				console.log('Authenticated successfully with payload, authData');
			}
			}, {remember: 'sessionOnly'});
		},
		logout: function(){
			auth.unauth();
			$state.go('home');
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
	//set facebook user as child of users
	var fbID = auth.child('users').child(authdUser.facebook.id);
	
	//sending to firebase
	fbID.update({
		fb: authdUser.facebook,
		uid: authdUser.facebook.id,
		fullName: authdUser.facebook.displayName
	});
	}
	})
	;//end it all
