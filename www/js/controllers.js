angular.module('starter').controller("MainCtrl", function($scope, Cities, $rootScope) {
  $scope.countries = [
    {no: "2", country: "TURKIYE", code: "tr"},
    {no: "33", country: "ABD", code: "us"},
    {no: "166", country: "AFGANISTAN", code: "af"},
    {no: "13", country: "ALMANYA", code: "de"},
    {no: "17", country: "ANDORRA", code: "ad"},
    {no: "140", country: "ANGOLA", code: "ao"},
    {no: "125", country: "ANGUILLA", code: "ai"},
    {no: "90", country: "ANTIGUA VE BARBUDA", code: "ag"},
    {no: "199", country: "ARJANTIN", code:"ar"},
    {no: "25", country: "ARNAVUTLUK", code: "al"},
    {no: "153", country: "ARUBA", code: "aw"},
    {no: "59", country: "AVUSTRALYA", code: "au"},
    {no: "35", country: "AVUSTURYA", code: "at"},
    {no: "5", country: "AZERBAYCAN", code: "az"}
  ];

  $scope.refresh = function() {
    $rootScope.times_list = false;
    $rootScope.country_button = true;
  }
})
