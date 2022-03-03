const {Given,When,Then} = require ('@cucumber/cucumber');
const {assertThat,is} = require ('hamjest')
const Person = require('../../src/class');
  Given('Sabiitti is {int} metres away', function (distance) {
      this.Sabiiti = new Person;
      this.Grace = new Person;
      this.Sabiiti.moveTo(distance)
  console.log(distance)
  });


  When('Grace shouts {string}', function (message) {
   this.Grace.shouts(message);
   this.message = message;
  });



  Then('Sabiti hears Grace\'s message', function () {
    assertThat(this.Sabiiti.messageHeard(),is([this.message]))
  });