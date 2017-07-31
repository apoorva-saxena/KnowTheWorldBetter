(function() {
    var app = angular.module("World", []);

    app.controller('WorldController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/world_data'
        }).then(function successCallback(response) {
            $scope.world_data = response.data
        }, function errorCallback(response) {
            console.log(response)
        });
    })


})();