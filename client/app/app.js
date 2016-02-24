'use strict';

angular.module('githubProjectsApp', [
  'githubProjectsApp.auth',
  'githubProjectsApp.admin',
  'githubProjectsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
