// app.js

// create angular app

var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function($scope){
    $scope.submitForm = function(isValid){
        $scope.submitted = true;
        if(isValid){
            alert('our form is amazing');
        }
    };
});

