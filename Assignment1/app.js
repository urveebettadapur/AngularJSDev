// Create an AngularJS module
var app = angular.module("farmerApp", []);

// Create a controller
app.controller("FarmerController", function($scope) {

    // Application data
    $scope.message = "Welcome to the Farmer Management Dashboard!";

    $scope.farmerName = "Urvee";

    $scope.farmers = [
        {
            name: "Ramesh",
            village: "Mandya",
            crop: "Sugarcane"
        },
        {
            name: "Suresh",
            village: "Mysuru",
            crop: "Ragi"
        },
        {
            name: "Mahesh",
            village: "Hassan",
            crop: "Coffee"
        }
    ];

});