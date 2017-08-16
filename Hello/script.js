var module = angular.module('angularApp', [ ]);


module.controller('HelloController', function($scope) {
    $scope.welcomeMessage = 'Hello, world!';
});