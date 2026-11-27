var app = angular.module("apiApp", []);

app.controller("ApiController", function($scope, $http) {

    // Stores the user records fetched from the API
    $scope.users = [];

    // GET request loading and error states
    $scope.loadingUsers = false;
    $scope.userError = "";

    // Stores the details entered in the POST form
    $scope.newPost = {
        title: "",
        body: "",
        userId: 1
    };

    // POST request loading, error and success states
    $scope.submittingPost = false;
    $scope.postError = "";
    $scope.postSuccess = null;


    // GET Request: Fetch user records
    $scope.loadUsers = function() {

        $scope.loadingUsers = true;
        $scope.userError = "";

        $http.get("https://jsonplaceholder.typicode.com/users")

            .then(function(response) {

                // Store the fetched records
                $scope.users = response.data;

            })

            .catch(function(error) {

                // Display an error message
                $scope.userError = "Unable to fetch user records. Please try again.";

                console.error("GET Request Error:", error);

            })

            .finally(function() {

                // Stop the loading indicator
                $scope.loadingUsers = false;

            });
    };


    // POST Request: Submit a new post
    $scope.submitPost = function(form) {

        if (form.$invalid) {
            return;
        }

        $scope.submittingPost = true;
        $scope.postError = "";
        $scope.postSuccess = null;

        $http.post(
            "https://jsonplaceholder.typicode.com/posts",
            $scope.newPost
        )

        .then(function(response) {

            // Store the API response
            $scope.postSuccess = response.data;

            // Clear the form fields
            $scope.newPost = {
                title: "",
                body: "",
                userId: 1
            };

            // Reset form validation states
            form.$setPristine();
            form.$setUntouched();

        })

        .catch(function(error) {

            // Display an error message
            $scope.postError = "Unable to submit the post. Please try again.";

            console.error("POST Request Error:", error);

        })

        .finally(function() {

            // Stop the loading indicator
            $scope.submittingPost = false;

        });
    };


    // Fetch users when the application starts
    $scope.loadUsers();

});