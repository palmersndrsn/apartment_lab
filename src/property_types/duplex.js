var Property = require("./Property");
var inherits = require("./../inherits.js")

function Duplex(address) {
  // A duplex only has 2 units;
  this.address = address
  this.unit = [1,2]
}

inherits(Duplex,Property)

module.exports = Duplex;