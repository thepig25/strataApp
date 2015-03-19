# Strata Property App
## Details
An application to manage Strata Properites and commmunicate with tennants. 

## Testing
BDD using cucumber.js and webdriver.io
TDD using jasmine

### Running the app
 * Hack for now to set port number to allow jasmine and cucumber tests to run concurently

```
 $ JASMINE_MIRROR_PORT=5050 meteor
 Open 
 http://localhost:3000
 ```

### Technology
* Meteor
 https://www.meteor.com/
* Monogo DB
 http://www.mongodb.org/
 * Iron Router
 https://github.com/iron-meteor/iron-router
 * accounts-password
 * accounts-google
 * accounts-facebook
*  Sass, Twitter Bootstrap for styling
* For Testing
 * Behavioural/Integration
  * xolvio:cucumber
    https://github.com/xolvio/meteor-cucumbercu
    https://cukes.info/
  * velocity:html-reporter
    https://github.com/meteor-velocity/html-reporter
  * xolvio:webdriver
    http://webdriver.io/
* Unit Testing
 * Jasmine
  * http://jasmine.github.io/edge/introduction.html



