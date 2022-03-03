
const {Given,When,Then} = require ('@cucumber/cucumber');
const {assertThat,is} = require ('hamjest')



  Given('Account has {int}', function (balance) {
 account = 100000
  });



  Given('Bank charge is {int}', function (int) {
  bankCharge = 5000
  });



  Given('Bank minimum balance is {int}', function (int) {
  minimumBalance = 20000
  });



  When('Customer withdraws {int}', function (int) {
  // When('Customer withdraws {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Then('New Account balance {int}', function (int) {
  // Then('New Account balance {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

