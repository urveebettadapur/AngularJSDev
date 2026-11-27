
var app = angular.module("farmerRegistrationApp", []);

app.controller("RegistrationController", function($scope) {

    // Stores the farmer details entered in the form
    $scope.farmer = {};

    // Stores the successfully registered farmer
    $scope.registeredFarmer = null;

    // Handles form submission
    $scope.submitForm = function(form) {

        if (form.$valid) {

            // Save a copy of the submitted farmer details
            $scope.registeredFarmer = angular.copy($scope.farmer);

            // Clear the form fields
            $scope.farmer = {};

            // Reset form validation states
            form.$setPristine();
            form.$setUntouched();
        }
    };

});