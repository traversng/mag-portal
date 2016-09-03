import angular from 'angular';
import template from './sidebar.html';

const sidebar = angular.module('sidebar', [])
.component('sidebar', {
  template,
  controller: ['Auth', function(Auth) {
    console.log('sidebar called and Auth: ', Auth);
    let ac = this;
    Auth.$onAuthStateChanged(function(firebaseUser) {
			ac.user = firebaseUser;
      console.log('ac user: ', ac.user);
		});
  }]
});

export {sidebar};
