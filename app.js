define(['angularAMD', 'angular-route'], function (angularAMD) {


  'use strict';
  var app = angular.module("webapp", ['ngRoute']);
  
  app.config(function ($routeProvider) {
    $routeProvider
    .when("/", angularAMD.route({
        templateUrl: 'templates/home.html', controller: 'HomeCtrl', controllerUrl: 'js/controllers/home/HomeCtrl'
    })).otherwise({redirectTo: "/home"});
  });
  
  return angularAMD.bootstrap(app);
});