var SolarSystem = function(name) {
  this.name = name;
  this.planets = [];
}

SolarSystem.prototype = {

  addPlanet: function( planet ) {
    this.planets.push( planet );
  },

  getNumPlanetaryBodies: function() {
    var numPlanetaryBodies = 0;
    numPlanetaryBodies += this.planets.length;
    for(planet of this.planets) {
      numPlanetaryBodies += planet.moons.length;
    }
    return numPlanetaryBodies;
  },

  heatDeath: function() {
    this.planets = [];
    for(planet of this.planets) {
      planet.moons = [];
    }
  }

}

module.exports = SolarSystem;
