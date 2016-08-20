import angular from 'angular';
import template from './home.html';

const home = angular.module('home', [])
.component('home', {
  template,
  controller: ['$scope', function($scope) {
    console.log('in home component');
    let homeController = this;
  }]
});

export {home};
