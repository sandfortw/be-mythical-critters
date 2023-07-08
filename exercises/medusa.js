class Medusa {
  constructor(name) {
    this.name = name
    this.statues = [];
  }

  stare(person){
    person.stone();
    this.statues.push(person);
    if (this.statues.length > 3) {
      this.statues[0].unstone()
      this.statues.shift();
    }
  }
}

module.exports = Medusa;