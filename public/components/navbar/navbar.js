import angular from 'angular';
import template from './navbar.html';

const navbar = angular.module('navbar', [])
.component('navbar', {
  template,
  controller: ['Auth', '$state', function(Auth, $state) {
    let nc = this;
    nc.user = Auth.$getAuth();
    nc.loggedIn = Auth.currentUser;
    console.log('nc.user: ', nc.user);
    nc.logoutUser = function() {
      Auth.$signOut();
    $state.go('home.login');
  };
  Auth.$onAuthStateChanged(function(firebaseUser) {
			nc.user = firebaseUser;
      console.log('nc user: ', nc.user);
		});
  }]
});

export {navbar};
