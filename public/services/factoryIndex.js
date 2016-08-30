import angular from 'angular';

const factories = angular.module('factories', [])
//factories around firebase modules
.factory('Auth', ['$firebaseAuth', function($firebaseAuth) {
  return $firebaseAuth();
}])
.factory('Profile', ['$firebaseObject', function($firebaseObject) {
  return function(uid) {
    var ref = firebase.database().ref().child('Profiles').child(uid);
    return $firebaseObject(ref);
  };
}])
.factory('DB', ['$firebaseObject', function($firebaseObject) {
  var ref = firebase.database().ref();
  return $firebaseObject(ref);
}]);

export {factories};
