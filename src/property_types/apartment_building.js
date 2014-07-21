var Property = require("./Property.js");
var inherits = require("./../inherits.js")

function ApartmentBuilding(name, address) {
  // A building can have many many units 
  this.name = name
  this.address = address
  this.unit = []
}

inherits(ApartmentBuilding,Property)

module.exports = ApartmentBuilding;