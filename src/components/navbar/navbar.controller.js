'use strict';

angular.module('hausbrewer')
  .controller('NavbarCtrl', function (Auth) {
  	this.logout = Auth.logout;
  });
