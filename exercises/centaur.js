class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.standing = true;
    this.layingDown = false;
    this.cranky_count = 0;
    this.cranky = false;
    }

  run(){
    if(this.standing){
      this.cranky_count += 1;
      this.make_cranky()
      return 'Clop clop clop clop!!!';
    }else{
      return 'NO!';
    }
  }

  shoot(){
    if(!this.cranky && this.standing){
      this.cranky_count += 1;
      this.make_cranky()
      return 'Twang!!!'
    } else{
      return 'NO!';
    }
  }

  sleep(){
    if(this.standing){
      return 'NO!'
    }else{
      this.cranky_count = 0
      this.cranky = false
      return 'ZZZZ'
    }
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  make_cranky(){
    if(this.cranky_count > 2){
      this.cranky = true;
    }else{
      this.cranky = false;
    }
  }

  drinkPotion(){
    if(this.layingDown){
      return 'Not while I\'m laying down!'
    }else if(!this.cranky){
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }
}

module.exports = Centaur;