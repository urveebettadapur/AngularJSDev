# Assignment 3 – REST API Integration

## Overview

This assignment demonstrates REST API integration using AngularJS and JSONPlaceholder.

The application performs GET and POST requests to retrieve user records and submit new posts. It also implements loading indicators and error handling to manage API request states.

## Features

- Fetch user records using a GET request.
- Display user details including name, username, email and city.
- Submit new posts using a POST request.
- Display the API response after successful submission.
- Loading indicators during API requests.
- Error messages for failed requests.
- Form validation for post submission.
- Responsive user interface.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- AngularJS 1.8.2
- JSONPlaceholder REST API

## API Endpoints

| HTTP Method | Endpoint | Purpose |
|---|---|---|
| GET | `https://jsonplaceholder.typicode.com/users` | Retrieve user records |
| POST | `https://jsonplaceholder.typicode.com/posts` | Submit a new post |

## AngularJS Concepts Used

### 1. AngularJS Module and Controller

The application is created using an AngularJS module and an ApiController.

### 2. $http Service

The AngularJS `$http` service is used to communicate with REST APIs.

### 3. GET Request

The `$http.get()` method retrieves user records from JSONPlaceholder.

### 4. POST Request

The `$http.post()` method sends new post details to JSONPlaceholder.

### 5. JSON Data Handling

The API response is accessed using `response.data` and displayed using AngularJS data binding.

### 6. Promise Handling

- `.then()` handles successful API responses.
- `.catch()` handles request failures.
- `.finally()` handles operations that must execute after a request completes.

### 7. Loading and Error Handling

Loading indicators and error messages are implemented using AngularJS scope variables and conditional rendering.

### 8. Form Handling

The POST form uses `ng-model`, `ng-submit` and AngularJS form validation.

## How to Run

1. Open the Assignment3 folder.
2. Open `index.html` in a web browser.
3. Allow the application to fetch user records.
4. Enter a post title and description.
5. Provide a User ID.
6. Click Submit Post.
7. View the API response.

An internet connection is required to load AngularJS and communicate with JSONPlaceholder.

## Important Note

JSONPlaceholder is a fake REST API used for testing and learning. POST requests return a simulated successful response, but the submitted data is not permanently stored on the server.

## Objective

To understand REST API integration, HTTP methods, asynchronous requests, JSON data handling and error management using AngularJS.