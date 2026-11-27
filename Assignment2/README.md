
# Assignment 2 – Farmer Registration Form

## Overview

This assignment demonstrates the creation of a Farmer Registration Form using AngularJS.

The form collects farmer information and implements form validation to ensure that the required details are entered correctly before registration.

## Features

- Farmer Name input field
- Mobile Number input field
- Address input field
- Village input field
- Crop input field
- Required-field validation
- Indian 10-digit mobile number validation
- Appropriate validation error messages
- Successful registration confirmation
- Display of registered farmer details
- Automatic form reset after successful registration
- Responsive user interface

## Technologies Used

- HTML5
- CSS3
- AngularJS 1.8.2

## Project Structure

```text
Assignment2/
│
├── index.html
├── app.js
├── README.md
│
└── css/
    └── style.css
```

## AngularJS Concepts Used

### 1. AngularJS Module

The application is created using the AngularJS module method.

### 2. Controller

The RegistrationController manages farmer details and handles form submission.

### 3. ng-model

The ng-model directive binds form inputs to the farmer object.

### 4. Form Validation

AngularJS form validation is implemented using:

- required
- ng-pattern
- $valid
- $error
- $touched
- $submitted

### 5. ng-if

The ng-if directive displays validation messages and the successful registration section conditionally.

### 6. AngularJS Form Methods

- `$setPristine()` resets the form's modified state.
- `$setUntouched()` resets the touched state of the form fields.

### 7. angular.copy()

The angular.copy() method creates a separate copy of the submitted farmer details.

## Mobile Number Validation

The mobile number must:

- Contain exactly 10 digits.
- Start with 6, 7, 8 or 9.

The regular expression used is:

```javascript
/^[6-9][0-9]{9}$/
```

## How to Run

1. Open the Assignment2 folder.
2. Open `index.html` in a web browser.
3. Enter the farmer details.
4. Submit the form.
5. View the registration confirmation and farmer details.

An internet connection is required to load AngularJS from the Google CDN.

## Objective

To understand AngularJS form handling, data binding, validation, controllers and conditional rendering through a practical farmer registration application.