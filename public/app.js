import angular from 'angular';
import {factories} from './services/factoryIndex';
import {home} from './components/home/home';
import {navbar} from './components/navbar/navbar';
import {login} from './components/login/login';
import {signup} from './components/signup/signup';
import {account} from './components/account/account';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import 'bootstrap-social';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC6McRaJsL-9l8yywzy6Byu0cB4B4TV_hg",
  authDomain: "magnetic-creative.firebaseapp.com",
  databaseURL: "https://magnetic-creative.firebaseio.com",
  storageBucket: "magnetic-creative.appspot.com",
};
firebase.initializeApp(firebaseConfig);
angular.module('app', [
  'firebase',
  'ui.router',
  factories.name,
  home.name,
  navbar.name,
  login.name,
  account.name,
  signup.name
])

.run(['$rootScope', '$state', function($rootScope, $state) {

  //redirect logged out users
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error == 'AUTH_REQUIRED') {
      return $state.go('home.login');
    }
  });

}])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home/login');
  $stateProvider
  .state('home', {
    url: '/home',
    component: 'home'
  })
  .state('home.login', {
    url: '/login',
    views: {
      'login': {
        component: 'login'
      }
    }
  })
  .state('home.signup', {
    url: '/signup',
    views: {
      'signup': {
        component: 'signup'
      }
    }
  })
  .state('home.account', {
    url: '/account',
    resolve: {
      'currentAuth': ['Auth', function(Auth) {
        return Auth.$requireSignIn();
      }]
    },
    views: {
      'account': {
        component: 'account'
      }
    }
  });
}]);
