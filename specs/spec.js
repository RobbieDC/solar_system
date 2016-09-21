var assert = require("assert");
var Planet = require("../planet");
var SolarSystem = require("../solar_system");
var Moon = require("../moon");

describe("moon", function() {

  var cordelia;

  beforeEach(function() {
    cordelia = new Moon("Cordelia");
  });

  it("moon has name", function() {
    assert.equal( "Cordelia", cordelia.name );
  });

});

describe("planet", function() {

  var uranus;

  beforeEach(function() {
    uranus = new Planet("Uranus");
  });

  it("planet has name", function() {
    assert.equal( "Uranus", uranus.name );
  });

  it("planet has empty array of moons", function() {
    assert.deepEqual( [], uranus.moons );
  });

});

describe("solar system", function() {

  var sol;

  beforeEach(function() {
    sol = new SolarSystem("Sol");
  });

  it("solar system has name", function() {
    assert.equal( "Sol", sol.name );
  });

  it("solar system has empty array of planets", function() {
    assert.equal( 0, sol.planets.length );
  });

});

describe("planet moon solarSystem interaction", function() {

  var uranus;
  var sol;
  var cordelia;

  beforeEach(function() {
    uranus = new Planet("Uranus");
    sol = new SolarSystem("Sol");
    cordelia = new Moon("Cordelia");
    sol.addPlanet( uranus );
    uranus.addMoon( cordelia );
  });

  it("can add moon to planet", function() {
    assert.deepEqual( [cordelia], uranus.moons );
  });

  it("can add planet to solar system", function() {
    assert.deepEqual( [uranus], sol.planets );
  });

  it("can get total number of planetary bodies in solar system", function() {
    assert.equal( 2, sol.getNumPlanetaryBodies() );
  });

  it("can undergo heat death", function() {
    sol.heatDeath();
    assert.equal( 0, sol.getNumPlanetaryBodies() );
  });

});
