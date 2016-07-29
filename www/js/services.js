angular.module('starter')

.factory('Cities', function($http) {
  var get = function(code) {
    return $http.get("http://www.diyanet.gov.tr/PrayerTime/FillState?countryCode=" + code);
  };
  return {
    get: get
  }
})

.factory('Towns', function($http) {
  var get = function(city_id) {
    return $http.get("http://www.diyanet.gov.tr/PrayerTime/FillCity?itemId=" + city_id);
  };
  return {
    get: get
  }
})
