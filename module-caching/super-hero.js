class SuperHero {
  constructor(name) {
    // a constructor to inital a property
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

// exporting an instance of this class

module.exports = new SuperHero("Batman");
