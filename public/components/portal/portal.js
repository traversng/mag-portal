import angular from 'angular';
import template from './portal.html';

const portal = angular.module('portal', [])
.component('portal', {
  template,
  controller: ['$scope', function($scope) {
    console.log('in portal component');
    let portalController = this;
  }]
});

export {portal};
