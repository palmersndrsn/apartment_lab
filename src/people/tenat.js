var Person = require("./person.js");
var inherits = require("./../inherits.js")

function Tenat(name, contact) {
  // set this.name, and contact
  this.name = name
  this.contact = contact
  this.references = [];
};

inherits(Tenat,Person)

Tenat.prototype.addReference = function(reference){
  // add reference to references
  this.references.push(reference)
};

module.exports = Tenat;