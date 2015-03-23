"use strict";angular.module("hausbrewer",["ui.router","firebase"]).config(["$stateProvider","$urlRouterProvider",function(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl",controllerAs:"main"}).state("landing",{url:"/landing",templateUrl:"app/landing/landing.html",controller:"LandCtrl",controllerAs:"land"}).state("landing.recipe",{url:"/recipe",templateUrl:"app/recipe/recipe.html",controller:"RecipeCtrl",controllerAs:"recipe"}).state("landing.ferment",{url:"/ferment",templateUrl:"app/ferment/ferment.html",controller:"FermentCtrl",controllerAs:"ferment"}).state("addarecipe",{url:"/addarecipe",templateUrl:"app/addarecipe/addarecipe.html",controller:"addarecipeCtrl",controllerAs:"addrec"}).state("singlerecipe",{url:"/:user/:singlerecipe",templateUrl:"app/singlerecipe/singlerecipe.html",controller:"SinglerecipeCtrl",controllerAs:"singlerec"}),a.otherwise("/")}]),function(){angular.module("hausbrewer").controller("SinglerecipeCtrl",["$firebaseObject","$stateParams","$firebaseArray","Auth","$state",function(e,a,r,n,s){var t=new Firebase("https://hausbrewer.firebaseio.com/recipes/"+a.user+"/"+a.singlerecipe);this.userInfo=e(t);var i=this;this.step=1,this.stepfor=function(){return 7===i.step?void 0:(i.step++,i.step)},this.stepback=function(){return 1===i.step?void 0:(i.step--,i.step)},n.onAuth(function(e){i.user=e});var l=new Firebase("https://hausbrewer.firebaseio.com/ferm/"+i.user.$id);this.lsferm=r(l),this.ptoferm=function(e){this.lsferm.$add(e),s.go("landing.ferment")}}])}(),angular.module("hausbrewer").factory("Auth",["$firebaseObject","$state",function(e,a){function r(a){if(null===a)return null;var r=n.child("users").child(a.facebook.id);return r.update({fb:a.facebook,uid:a.facebook.id,fullName:a.facebook.displayName}),r=e(n.child("users").child(a.facebook.id))}var n=new Firebase("https://hausbrewer.firebaseio.com/");return{onAuth:function(e){n.onAuth(function(a){e(r(a))})},fbLogin:function(){return n.authWithOAuthPopup("facebook",function(e){e?console.log("Login Failed!",e):(a.go("landing.recipe"),console.log("Authenticated successfully with payload, authData"))},{remember:"sessionOnly"})},logout:function(){n.unauth(),a.go("home"),console.log("goodbye")},loggedIn:function(){return n.getAuth()?!0:void 0}}}]),angular.module("hausbrewer").controller("RecipeCtrl",["$firebaseObject","$firebaseArray","$stateParams","Auth",function(e,a,r,n){var s=this;n.onAuth(function(e){s.user=e});var t=new Firebase("https://hausbrewer.firebaseio.com/recipes/"+s.user.$id);this.recArray=a(t)}]),angular.module("hausbrewer").controller("MainCtrl",["$firebaseArray","$firebaseObject","Auth",function(e,a,r){var n=this,s=new Firebase("https://hausbrewer.firebaseio.com/users");this.obj=e(s),console.log(this.obj),this.userArray={},this.fbLogin=r.fbLogin,r.onAuth(function(e){n.user=e,console.log(null===e?"null":e)})}]),angular.module("hausbrewer").controller("LandCtrl",["Auth",function(e){var a=this;e.onAuth(function(e){a.user=e}),this.selected=1,this.select=function(e){this.selected=e}}]),angular.module("hausbrewer").controller("FermentCtrl",["$firebaseObject","$firebaseArray","Auth","$state",function(e,a,r){var n=this;r.onAuth(function(e){n.user=e});var s=new Firebase("https://hausbrewer.firebaseio.com/ferm/"+n.user.$id);this.fermArray=a(s)}]),angular.module("hausbrewer").controller("addarecipeCtrl",["$firebaseObject","$firebaseArray","Auth","$state",function(e,a,r,n){var s=this;r.onAuth(function(e){s.user=e});var t=new Firebase("https://hausbrewer.firebaseio.com/recipes/"+s.user.$id);this.obj=a(t),this.submitRecipe=function(e){this.obj.$add(e),n.go("landing.recipe")}}]),angular.module("hausbrewer").controller("NavbarCtrl",["Auth",function(e){this.logout=e.logout}]),angular.module("hausbrewer").run(["$templateCache",function(e){e.put("app/addarecipe/addarecipe.html",'<div class="objcontainer"><p>Add a new recipe</p><section class="recipeform"><form class="add-a-recipe" ng-submit="addrec.submitRecipe(addarec.newRec)"><label>Recipe Name</label> <input type="text" class="recipename" ng-model="addarec.newRec.recipename" placeholder="Recipe Name" value="recipename"> <label>Grains</label><section class="grainssection"><input type="number" class="grainnumber qty" ng-model="addarec.newRec.grainqty1" placeholder="lbs" step="any"> <input type="text" class="addgrain ing" ng-model="addarec.newRec.grain1" placeholder="Grain"><br><input type="number" class="grainnumber qty" ng-model="addarec.newRec.grainqty2" placeholder="lbs" step="any"> <input type="text" class="addgrain ing" ng-model="addarec.newRec.grain2" placeholder="Grain"><br><input type="number" class="grainnumber qty" ng-model="addarec.newRec.grainqty3" placeholder="lbs" step="any"> <input type="text" class="addgrain ing" ng-model="addarec.newRec.grain3" placeholder="Grain"><br><input type="number" class="grainnumber qty" ng-model="addarec.newRec.grainqty4" placeholder="lbs" step="any"> <input type="text" class="addgrain ing" ng-model="addarec.newRec.grain4" placeholder="Grain"><br><input type="number" class="grainnumber qty" ng-model="addarec.newRec.grainqty5" placeholder="lbs" step="any"> <input type="text" class="addgrain ing" ng-model="addarec.newRec.grain5" placeholder="Grain"><br></section><label>Hops</label><section class="hopssection"><input type="number" class="hopnumber qty" ng-model="addarec.newRec.hopqty1" placeholder="ozs" step="any"> <input type="text" class="addhops ing" ng-model="addarec.newRec.hop1" placeholder="Hops"><br><input type="number" class="hopnumber qty" ng-model="addarec.newRec.hopqty2" placeholder="ozs" step="any"> <input type="text" class="addhops ing" ng-model="addarec.newRec.hop2" placeholder="Hops"><br><input type="number" class="hopnumber qty" ng-model="addarec.newRec.hopqty3" placeholder="ozs" step="any"> <input type="text" class="addhops ing" ng-model="addarec.newRec.hop3" placeholder="Hops"><br><input type="number" class="hopnumber qty" ng-model="addarec.newRec.hopqty4" placeholder="ozs" step="any"> <input type="text" class="addhops ing" ng-model="addarec.newRec.hop4" placeholder="Hops"><br><input type="number" class="hopnumber qty" ng-model="addarec.newRec.hopqty5" placeholder="ozs" step="any"> <input type="text" class="addhops ing" ng-model="addarec.newRec.hop5" placeholder="Hops"><br></section><label>Other Aditions</label><section class="othersection"><input type="number" class="miscnumber qty" ng-model="addarec.newRec.otherqty1" placeholder="ozs" step="any"> <input type="text" class="addother ing" ng-model="addarec.newRec.other1" placeholder="Misc. Addition"><br><input type="number" class="miscnumber qty" ng-model="addarec.newRec.otherqty2" placeholder="ozs" step="any"> <input type="text" class="addother ing" ng-model="addarec.newRec.other2" placeholder="Misc. Addition"><br><input type="number" class="miscnumber qty" ng-model="addarec.newRec.otherqty3" placeholder="ozs" step="any"> <input type="text" class="addother ing" ng-model="addarec.newRec.other3" placeholder="Misc. Addition"><br></section><label>Yeast</label><section class="yeastsection"><input type="number" class="yeastnumber qty" ng-model="addarec.newRec.yeastqty1" placeholder="pkgs"> <input type="text" class="addyeast ing" ng-model="addarec.newRec.yeast1" placeholder="Yeast"><br></section><button class="addrecipebut" value="Add Recipe">Add Recipe</button></form></section><a ui-sref="landing.recipe" class="canceladdrec">Cancel (do not add recipe)</a></div><hr><div class="footer"><p>This project is open source! Open a pull request with ideas and/or solutions <a href="https://github.com/jrutishauser/hausbrewer/">hausbrewer on github</a></p></div>'),e.put("app/ferment/ferment.html",'<div class="fermcard"><h2>fermenting</h2><section class="fermitems" ng-repeat="singlef in ferment.fermArray"><p>{{singlef.recipename}} {{singlef.days}}</p></section></div>'),e.put("app/landing/landing.html",'<div class="landingtitle"><h1>Brew Management</h1><p>Good to see you again {{land.user.fullName}}. What are you brewing today?</p></div><nav class="landingnav"><a ui-sref="landing.recipe" ng-click="land.select(1)" ng-class="{active: land.selected === 1}">Recipe</a> <a ui-sref="landing.ferment" ng-click="land.select(2)" ng-class="{active: land.selected === 2}">Ferment</a></nav><div ui-view=""></div><hr><div class="footer"><p>This project is open source. Open a pull request with ideas and/or solutions <a href="https://github.com/jrutishauser/hausbrewer/">hausbrewer on github</a></p></div>'),e.put("app/main/main.html",'<div class="logincont"><a ng-click="main.fbLogin()"><img src="/assets/images/login.png" alt="login w/ facebook"><h1>time to brew</h1>Click the liter to login with facebook</a><hr></div><div class="footer"><p>Have one on the house. This project is free to use and open source. Open a pull request with ideas and/or solutions <a href="https://github.com/jrutishauser/hausbrewer/">hausbrewer on github</a></p></div>'),e.put("app/recipe/recipe.html",'<div class="recipecard"><h2>your recipes</h2><section class="recipeitem" ng-repeat="rec in recipe.recArray"><a ui-sref="singlerecipe({user: recipe.user.$id, singlerecipe: rec.$id})"><p>{{rec.recipename}}</p></a></section><a ui-sref="addarecipe"><b>+ add a recipe</b></a></div>'),e.put("app/singlerecipe/singlerecipe.html",'<div class="objcontainer"><button ng-click="singlerec.stepback()">step back</button> <button ng-click="singlerec.stepfor()">step forward</button><section class="inglist" ng-show="singlerec.step === 1"><h1>{{singlerec.userInfo.recipename}}</h1><h3>Grains</h3><span>{{singlerec.userInfo.grainqty1}}</span> <span>{{singlerec.userInfo.grain1}}</span><br><span>{{singlerec.userInfo.grainqty2}}</span> <span>{{singlerec.userInfo.grain2}}</span><br><span>{{singlerec.userInfo.grainqty3}}</span> <span>{{singlerec.userInfo.grain3}}</span><br><span>{{singlerec.userInfo.grainqty4}}</span> <span>{{singlerec.userInfo.grain4}}</span><br><span>{{singlerec.userInfo.grainqty5}}</span> <span>{{singlerec.userInfo.grain5}}</span><br><h3>Hops</h3><span>{{singlerec.userInfo.hopqty1}}</span> <span>{{singlerec.userInfo.hop1}}</span><br><span>{{singlerec.userInfo.hopqty2}}</span> <span>{{singlerec.userInfo.hop2}}</span><br><span>{{singlerec.userInfo.hopqty3}}</span> <span>{{singlerec.userInfo.hop3}}</span><br><span>{{singlerec.userInfo.hopqty4}}</span> <span>{{singlerec.userInfo.hop4}}</span><br><span>{{singlerec.userInfo.hopqty5}}</span> <span>{{singlerec.userInfo.hop5}}</span><br><h3>Yeast</h3><span>{{singlerec.userInfo.yeastqty1}}</span> <span>{{singlerec.userInfo.yeast1}}</span><br><h3>Other</h3><span>{{singlerec.userInfo.otherqty1}}</span> <span>{{singlerec.userInfo.other1}}</span><br><span>{{singlerec.userInfo.otherqty2}}</span> <span>{{singlerec.userInfo.other2}}</span><br><span>{{singlerec.userInfo.otherqty3}}</span> <span>{{singlerec.userInfo.other3}}</span><br></section><section class="prepstep" ng-show="singlerec.step === 2"><h3>material preperation</h3><ul><li>Pop Yeast packet before starting.(3-12hrs @ room temp)</li><li>calibrate thermometers</li><li>Make 5 Gal Bucket of Sanitizer.</li><li>Fill brew kettle with 3gals of water + 1.5qt per 2lbs of grain</li><li>Sanitize mash tun, spoon, and everything else</li><li>Bring water in Brew kettle to 180 degrees</li></ul></section><section class="mash" ng-show="singlerec.step === 3"><h3>mashing!</h3><ul class="mashing"><li>Add 3 gallons of hot water to mash tun</li><li>Stir in the grains slowly</li><li>Once all grains are in take temperature</li><li>Add water as needed to hit target range(usally 150-152)</li><li>START A TIMER FOR 60 MINUTES</li></ul></section><section class="batchsparge" ng-show="singlerec.step === 4"><h3>Sparge!</h3><p>We are using batch sparge because that is the most efficient for new brewers.</p><ul class="spargelist"><li class="spar">drain from mash tun into a cup of some kind</li><li class="spar">pour this drained liquid on top of the mash tun until it contains no sediment</li><li class="spar">drain mash tun into brew kettle without disturbing the grain bed</li><li class="spar">add water stirl lightly, not violently and repeat steps 1-4 until brew kettle reaches needed volume. (typically about 6 gallons for a 5 gallon batch)</li><li class="spar">Take a gravity reading. REPORT</li></ul></section><section class="backtobrew" ng-show="singlerec.step === 5"><h3>boil</h3><ul class="brewket"><li class="brewitem">Boil.(tyically for 60 minutes)</li><li class="brewitem">TIMER!</li><li class="brewitem">add hops at appropriate times</li><li class="brewitem">add irish moss tablets at 10 minutes left</li></ul></section><section class="cooling" ng-show="singlerec.step === 6"><h3>cooling</h3><p>you want to cool the wort as quickly as possible to get it below 70 degrees</p><ul class="cooling"><li>move cooled young beer to carboy, double check temperature.</li><li>during drain to carboy pull a sample for gravity reading, do not pour sample back into carboy, discard</li><li>pitch yeast</li></ul></section><section class="movetoferm" ng-show="singlerec.step === 7"><h3>move to fermentation</h3><h4>{{singlerec.userInfo.recipename}}</h4><form ng-submit="singlerec.ptoferm(singlerec.userInfo)" class="addtoferm"><input type="text" value="{{singlerec.userInfo.recipename}}" ng-model="singlerec.userInfo.recipename"> <label for="fdays">Days to ferment</label> <input type="number" id="fdays" ng-model="singlerec.userInfo.days"> <button class="addtoferm">add recipe to fermentation</button></form></section><a ui-sref="landing.recipe"><p>back to recipes</p></a></div>'),e.put("components/navbar/navbar.html",'<nav class="navbar" ng-controller="NavbarCtrl as navbar"><a ui-sref="home">HausBrewer</a><ul><li class="active"><a ui-sref="landing.recipe">Dash</a></li><li><a ng-click="navbar.logout()">Logout</a></li></ul></nav>')}]);