var Person = require("./person");
var inherits = require("./../inherits.js")

function Manager(name, contact) {
  // set name and contact
  	this.name = name;
  	this.contact = contact;
	this.properties = [];
};

inherits(Manager,Person)

Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.properties.push(property)
};

Manager.prototype.removeProperty = function(property) {
  // remove properties //check if this works, if not try splice
  var propertyIndex = this.properties.indexOf(property);
		if (propertyIndex !== -1) {
			this.properties.splice(propertyIndex, 1);
		};
  };

module.exports = Manager;