var Planet = function(name) {
  this.name = name;
  this.moons = [];
}

Planet.prototype = {
  addMoon: function( moon ) {
    this.moons.push( moon );
  }
}

module.exports = Planet;