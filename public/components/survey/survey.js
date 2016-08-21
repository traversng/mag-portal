import angular from 'angular';
import template from './survey.html';

const survey = angular.module('survey', [])
.component('survey', {
  template,
  controller: ['Auth', '$state', function(Auth, $state) {
    let nc = this;
    nc.survey = {
      title: 'Client Survey',
      questions: {
        MyCompany: 'What is your company name?',
        CharlieSheen: 'Who is your ideal celebrity spokes person?',
        TheRock: 'Who would you vote for president?'
      }
    };
  }]
});

export {survey};
