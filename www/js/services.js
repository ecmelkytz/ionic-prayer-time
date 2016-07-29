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

.factory('Times', function($http) {
  var prayer_times = function(country_id, city_id, town_id) {
    return $http.post("http://www.diyanet.gov.tr/PrayerTime/PrayerTimesSet", {"countryName": country_id, "stateName": city_id, "name": town_id })
  };
  return {
    post: prayer_times
  }
})
