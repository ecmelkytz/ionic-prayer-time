angular.module('starter').filter('default', function(){
  return function(value, def) {
    return (value === undefined || value === null? def : value);
  };
})
