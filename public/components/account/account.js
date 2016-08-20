import angular from 'angular';
import template from './account.html';

const account = angular.module('account', [])
.component('account', {
  template,
  controller: ['Auth', function(Auth) {
    console.log('account called and Auth: ', Auth);
    let ac = this;
    Auth.$onAuthStateChanged(function(firebaseUser) {
			ac.user = firebaseUser;
      console.log('ac user: ', ac.user);
		});
  }]
});

export {account};
