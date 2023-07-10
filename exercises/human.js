class Human {
  constructor(name){
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  encounter(){
    this.encounterCounter++
    this.knockedOut = this.encounterCounter % 6 === 0 
  }

  noticesOgre(){
    return (this.encounterCounter === 0) ? false : this.encounterIsDivisibleByThree()
  }

  encounterIsDivisibleByThree(){
    return this.encounterCounter % 3 === 0
  }

  swungAt(){

  }
}

module.exports = Human;