'use strict';

angular.module('githubProjectsApp.auth', [
  'githubProjectsApp.constants',
  'githubProjectsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
