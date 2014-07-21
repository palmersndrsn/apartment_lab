var Property = require("./Property");
var inherits = require("./../inherits.js")

function TownHouse(address){
  // only has one unit per address
	this.address = address
	this.unit = [1]
};

inherits(TownHouse,Property)

TownHouse.prototype.available = function(){
  // a tenat it should not be available
  	
};

module.exports = TownHouse;