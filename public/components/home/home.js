import angular from 'angular';
import template from './home.html';

const home = angular.module('home', [])
.component('home', {
  template,
  controller: ['Auth', 'Profile', 'DB', '$state', function(Auth, Profile, DB, $state) {
    console.log('Auth: ', Auth);
    let hc = this;
    hc.user = Auth.$getAuth();
    hc.userPicture = Auth.$getAuth().providerData[0].photoURL;
    console.log('Auth.$getAuth: ', hc.userPicture);
  }]
});

export {home};
