# GithubChallenge
An app to create a simple GitHub Profile app purely in JavaScript that grabs data from the Github API in order to display a specified users avatar, number of followers and number of repos.
The project will involve using JavaScript to consume data available from third parties over the network (e.g. GitHub API data accessed via Ajax) and using more advanced JavaScript Model View Controller (MVC) frameworks such as AngularJS.

## Objectives of exercise
This project was an introduction on javascript and how to test it with Jasmine framwork and Protractor for 
the funtional test as well as mocking the http request

## Heroku
https://github-seach.herokuapp.com/

## Technologies used:

* Github API
* Javascript
* Jasmine
* Karma
* Protractor
* Selenium

## How to run it locally run:
```
$ open public/index.html
```

## How to run the unit test
```
$ git clone https://github.com/Mattia46/github-JS
$ npm install
$ karma start public/test/karma.conf.js
```
## How to run funtional test
```
$ http-server
$ webdriver-manager start
$ protractor public/test/e2e/conf.js
```
