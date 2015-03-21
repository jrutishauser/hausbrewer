'use strict';

angular.module('hausbrewer', ['ui.router', 'firebase'])
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
		.state('landing.recipe', {
		url: '/recipe',
		templateUrl: 'app/recipe/recipe.html',
		controller: 'RecipeCtrl',
		controllerAs: 'recipe'
		})
		.state('landing.ferment', {
		url: '/ferment',
		templateUrl: 'app/ferment/ferment.html',
		controller: 'FermentCtrl',
		controllerAs: 'ferment'
		})
		.state('addarecipe', {
		url: '/addarecipe',
		templateUrl: 'app/addarecipe/addarecipe.html',
		controller: 'addarecipeCtrl',
		controllerAs: 'addrec'
		})
		.state('singlerecipe', {
		url: '/:user/:singlerecipe',
		templateUrl: 'app/singlerecipe/singlerecipe.html',
		controller: 'SinglerecipeCtrl',
		controllerAs: 'singlerec'
		})
	  ;//end chained controllers
    $urlRouterProvider.otherwise('/');
  })
;//end config 
