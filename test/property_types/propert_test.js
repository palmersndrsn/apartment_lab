var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js");
  Manager = require("../../src/people/manager.js"),
  Property = require("../../src/property_types/Property.js"),
  Tenat = require("../../src/people/tenat.js"),
  Apt = require("../../src/property_types/apartment_building.js"),
  Duplex = require("../../src/property_types/duplex.js"),
  TownHouse = require("../../src/property_types/town_house.js");

describe('Property', function(){
  it('checking to see if a property can be added', function(){
  	var deathStar = new Property('12 parcecs from the rebel base');
  	expect(deathStar.address).to.eql('12 parcecs from the rebel base')
  });
});

describe('#setManager#getManager', function() {
	it('checking set manager', function() {
		var deathStar = new TownHouse('1.2 lightyears from the rebel base');
		var testManager = new Manager('Vader','XXXXXXXXX');
		Property.prototype.setManager(testManager);
		expect(Property.prototype.getManager()).to.eql(testManager)
	});
});
//Can't get to these until set manager works.
describe('#addTenant', function(){
	it('check to see if addTenat is working', function(){
		var deathStar = new TownHouse('1.2 lightyears from the rebel base');
		var testManager = new Manager('Vader','XXXXXXXXX');
		var newTenant = new Tenat('Jim Bob','aint got no phone');
		Property.prototype.setManager(testManager);
		Property.prototype.addTenant(deathStar[1], newTenant)
		expect(TownHouse.unit[0]).to.eql(newTenant);

	})
});

describe('#removeTenant', function(){
	it('check to see if removeTenat is working', function(){
		var deathStar = new Property('1.2 lightyears from the rebel base');
		var testManager = new Manager('Vader','XXXXXXXXX');
		Property.prototype.setManager(testManager);
	});
});
//still need add/remove tenant

//still need rented/available units
