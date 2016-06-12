'use strict';

angular.module('shine.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menu', {
    templateUrl: 'menu/menu.html',
    controller: 'MenuCtrl'
  });
}])

.controller('MenuCtrl', [function() {

}]);