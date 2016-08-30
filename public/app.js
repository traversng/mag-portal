import 'jquery';
import 'bootstrap';
import angular from 'angular';
import {factories} from './services/factoryIndex';
import {portal} from './components/portal/portal';
import {home} from './components/home/home';
import {navbar} from './components/navbar/navbar';
import {login} from './components/login/login';
import {signup} from './components/signup/signup';
import {account} from './components/account/account';
import {survey} from './components/survey/survey';
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
  portal.name,
  home.name,
  navbar.name,
  login.name,
  account.name,
  signup.name,
  survey.name
])

.run(['$rootScope', '$state', function($rootScope, $state) {

  //redirect logged out users
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error == 'AUTH_REQUIRED') {
      return $state.go('portal.login');
    }
  });

}])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/portal/login');
  $stateProvider
  .state('portal', {
    url: '/portal',
    component: 'portal'
  })
  .state('portal.home', {
    url: '/home',
    resolve: {
      'currentAuth': ['Auth', function(Auth) {
        return Auth.$requireSignIn();
      }]
    },
    views: {
      'home': {
        component: 'home'
      }
    }
  })
  .state('portal.login', {
    url: '/login',
    views: {
      'login': {
        component: 'login'
      }
    }
  })
  .state('portal.signup', {
    url: '/signup',
    views: {
      'signup': {
        component: 'signup'
      }
    }
  })
  .state('portal.account', {
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
  })
  .state('portal.survey', {
    url: '/survey',
    resolve: {
      'currentAuth': ['Auth', function(Auth) {
        return Auth.$requireSignIn();
      }]
    },
    views: {
      'survey': {
        component: 'survey'
      }
    }
  });
}]);
