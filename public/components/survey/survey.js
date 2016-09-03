import angular from 'angular';
import template from './survey.html';

const survey = angular.module('survey', [])
.component('survey', {
  template,
  controller: ['Auth', '$state', '$firebaseArray', function(Auth, $state, $firebaseArray) {
    let nc = this;
    let ref = firebase.database().ref().child('StakeholderSurvey');
    nc.getSurvey = function() {
      return $firebaseArray(ref);
    };
    console.log('survey ref: ', nc.getSurvey());
    nc.survey = nc.getSurvey();
  }]
});

export {survey};
