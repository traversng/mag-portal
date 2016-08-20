import angular from 'angular';
import template from './login.html';

const login = angular.module('login', [])
.component('login', {
  template,
  controller: ['$scope', function($scope) {
    console.log('login called');
    let loginController = this;
  }]
});

export {login};
