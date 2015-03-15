'use strict';

angular.module('hausbrewer')
	.factory('Auth', function($firebaseObject, $state){
		var auth = new Firebase('https://hausbrewer.firebaseio.com/');
		var currentUser = {};	
		var userInfo = {};	
	return {
		onAuth: function(creds){
			auth.onAuth(function(data){
				creds(updateUser(data));
				console.log('data in creds');
				console.log(data);	
			});
		},
		fbLogin: function(){
		
			return auth.authWithOAuthPopup('facebook', function(error, authData){
				console.log('authData');
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
		console.log('authdUser');
		console.log(authdUser);
	if ( authdUser === null){
		return null;	
	}
	//set facebook user as child of users
	var user = auth.child('users').child(authdUser.facebook.id);
	
	//sending to firebase
	user.update({
		fb: authdUser.facebook,
		uid: authdUser.facebook.id,
		fullName: authdUser.facebook.displayName
	});
	userInfo = $firebaseObject(auth.child('users').child(authdUser.facebook.id));
	console.log('userinfo');
	console.log(userInfo);	
	console.log(userInfo.$id.fullName);	
	}
	console.log('again!');
	console.log(userInfo);	
	return userInfo;
	})
	;//end it all
