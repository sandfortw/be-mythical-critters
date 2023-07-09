class Stark{
  constructor(name, location = 'Winterfell'){
    this.name = name;
    this.location = location;
    this.safe = false;
  }

  toggleSafe(){
    this.safe = !this.safe
  }
  houseWords(){
   return this.safe ? 'The North Remembers' : 'Winter is Coming'
  }
}

module.exports = Stark;