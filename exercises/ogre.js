class Ogre {
  constructor(name, home){
    this.name = name;
    this.home = home ||= 'Swamp';
    this.swings = 0;
  }

  encounter(human){
    human.encounter()
    human.noticesOgre() ? this.swingAt(human) : null
  }

  swingAt(human){
    this.swings++
  }

  apologize(human){
    human.knockedOut = false;
  }
}

module.exports = Ogre;