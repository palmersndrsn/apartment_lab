var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Manager = require("../../src/people/manager.js"),
  Property = require("../../src/property_types/Property.js"),
  Tenat = require("../../src/people/tenat.js")


describe("Person", function(){
  it('should check for proper name and contact', function() {
  	var newPerson = new Person('Palmer','123-123-1234');
  	 expect(newPerson.name).to.eql('Palmer');
  	 expect(newPerson.contact).to.eql('123-123-1234');

  });
});

describe("Tenat", function(){
  it('should check for proper name and contact', function() {
    var newPerson = new Tenat('Palmer','123-123-1234');
     expect(newPerson.name).to.eql('Palmer');
     expect(newPerson.contact).to.eql('123-123-1234');

  });
});

describe('#addProperty_Manager', function(){
	it('should check to see if adding a property works', function() {
		// var testProperty = new Property("123 fake st");
		var testManager = new Manager("Jimbo","123123123");
    testManager.addProperty('123 fake st');
    expect(testManager.properties).to.eql(['123 fake st']);
		
	});
});

describe('#removeProperty_Manager', function() {
  it('should check to see if property is removed', function() {
    var testManager = new Manager("Jimbo","123123123");
    testManager.addProperty('123 fake st');
    testManager.removeProperty('123 fake st');
    expect(testManager.properties).to.eql([]);

  });
});

describe('#addReference_tenat', function() {
  it('should create tenat and give them references', function() {
    var testTenant = new Tenat('Han Solo','1-800-FAL-CON1')
    testTenant.addReference('Chewy')
    expect(testTenant.references).to.eql(['Chewy'])
  });
});