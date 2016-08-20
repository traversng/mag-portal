import angular from 'angular';
import template from './signup.html';

const signup = angular.module('signup', [])
.component('signup', {
  template,
  controller: ['Auth', '$state', function(Auth, $state) {
    console.log('signup called');
    let sc = this;
    sc.signupEmail = '';
    sc.signupPassword = '';
    sc.createUserByEmail = function() {
			Auth.$createUserWithEmailAndPassword(sc.signupEmail, sc.signupPassword)
				.then(function(firebaseUser) {
					sc.user = firebaseUser;
				}).catch(function(error) {
					sc.signupError = error.message;
				});
		};
    Auth.$onAuthStateChanged(function(firebaseUser) {
			sc.user = firebaseUser;
      console.log('sc user: ', sc.user);
      $state.go('home.account');
		});
  }]
});

export {signup};
