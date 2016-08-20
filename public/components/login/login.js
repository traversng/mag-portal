import angular from 'angular';
import template from './login.html';

const login = angular.module('login', [])
.component('login', {
  template,
  controller: ['Auth', '$state', function(Auth, $state) {
    console.log('login called');
    let lc = this;
    lc.signinEmail = '';
    lc.signinPassword = '';
    lc.emailSignIn = function() {
			Auth.$signInWithEmailAndPassword(lc.signinEmail, lc.signinPassword)
				.then(function(firebaseUser) {
					lc.user = firebaseUser;
					lc.$parent.loggedIn = true;
				}).catch(function(error) {
					lc.signinError = error.message;
				});
		};
    lc.socialSignIn = function(provider) {
			Auth.$signInWithPopup(provider).then(function() {
        $state.go('home.account');
			}).catch(function(error) {
				lc.signinError = error;
			});
		};
  }]
});

export {login};
