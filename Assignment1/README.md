# Assignment 1 - AngularJS Fundamentals

## Overview

This assignment demonstrates the fundamental concepts of AngularJS through a simple Farmer Management Dashboard.

The application displays farmer records and demonstrates data binding, controllers, modules and AngularJS directives.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- AngularJS 1.8.2

## Features Implemented

### 1. AngularJS Module and Controller
- Created an AngularJS module named `farmerApp`.
- Implemented a controller named `FarmerController`.
- Used `$scope` to manage application data.

### 2. Two-Way Data Binding
- Used `ng-model` to bind an input field to the `farmerName` variable.
- Used interpolation (`{{ }}`) to display updated values.
- Demonstrated automatic synchronisation between the model and view.

### 3. ng-repeat
- Created an array of farmer objects.
- Used `ng-repeat` to dynamically display farmer records.
- Displayed farmer names, villages and crops.

### 4. ng-if
- Used conditional rendering to display messages based on whether a farmer name has been entered.
- Demonstrated how elements are added or removed from the DOM.

### 5. ng-show
- Used a checkbox with `ng-model` to control element visibility.
- Demonstrated showing and hiding elements based on a Boolean condition.

## Project Structure

```text
Assignment1/
│
├── index.html
├── app.js
├── README.md
│
└── css/
    └── style.css
```

## How to Run

1. Clone the repository.
2. Navigate to the `Assignment1` folder.
3. Open `index.html` in a web browser.
4. Ensure an internet connection is available to load AngularJS from the CDN.

## Learning Outcomes

- Understanding AngularJS modules and controllers.
- Working with `$scope`.
- Implementing two-way data binding.
- Dynamically rendering data using `ng-repeat`.
- Understanding conditional rendering using `ng-if`.
- Controlling element visibility using `ng-show`.