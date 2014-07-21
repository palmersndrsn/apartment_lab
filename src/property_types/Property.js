function Property(address) {
  this.address = address;
  this.units = [];
  this.managerCheck = false;
};

Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person;
  this.managerCheck = true;
};

Property.prototype.getManager = function() {
  return this.manager;
};

Property.prototype.addTenant = function(unit, tenat) {
  // add tenat but check to make sure there
  // is a manager first and a tenat has 2 references
  if (this.managerCheck === true && tenat.references.length >= 2) {
    unit.tenat = tenat;
  };
};

Property.prototype.removeTenat = function(unit, tenat) {
  // remove tenat
  this.unit.remove(tenat)
};

Property.prototype.availableUnits = function(){
  // return num of units available
  avaiUnits = 0;
  for (var i = 0; i <= this.units.length; i += 1) {
    if (this.unit[i].tenat === null) {       //finish
    avaiUnits += 1;
    }; 
  };
  return avaiUnits;
};

Property.prototype.rentedUnits = function(){
  // return rented units
  rUnits = 0;
  for (var i = 0; i <= this.units.length; i += 1) {
    if (this.unit[i].tenat !== null) {
      rUnits += 1;
    };
    return rUnits;
  };
};


module.exports = Property;