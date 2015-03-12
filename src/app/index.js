'use strict';

angular.module('hausbrewer', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
		controllerAs: 'main'
      })
	  .state('landing', {
	  	url: '/landing',
	  	templateURL: 'app/landing/landing.html',
		controller: 'LandCtrl',
		controllerAs: 'land'
		})
	  ;//end chained controllers
    $urlRouterProvider.otherwise('/');
  })
;//end config 
