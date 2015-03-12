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
	  	templateUrl: 'app/landing/landing.html',
		controller: 'LandCtrl',
		controllerAs: 'land'
		})
		.state('landing.recipes', {
		url: '/recipes',
		templateUrl: 'app/recipes/recipes.html',
		controller: 'RecipeCtrl',
		controllerAs: 'recipe'
		})
	  ;//end chained controllers
    $urlRouterProvider.otherwise('/');
  })
;//end config 
