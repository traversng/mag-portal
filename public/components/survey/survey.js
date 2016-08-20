import angular from 'angular';
import template from './survey.html';

const survey = angular.module('survey', [])
.component('survey', {
  template,
  controller: ['Auth', '$state', function(Auth, $state) {
    let nc = this;
    nc.data = {
      title: 'Magnetic Survey',
      questions: [
        'What is your company name?',
        'Who is your ideal celebrity spokes person?',
        'Who would you vote for president?'
      ]
    };
  }]
});

export {survey};
