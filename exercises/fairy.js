class Fairy {
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief(){
    this.dust++
  }

  believe(){
    this.dust += 10
  }

  makeDresses(dressArray){
    for (let i = 0; i < dressArray.length; i++) {
      this.clothes.dresses.push(dressArray[i])
    }
  }

  provoke(){
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant){
    if(this.disposition = 'Vengeful'){
      return this.gainWard(infant)
    }else{
      return infant
    }
  }

  gainWard(infant){
    infant.disposition = 'Malicious'
      this.humanWards.push(infant)
      if(this.humanWards.length === 3){
        this.disposition = 'Good natured';
      }
      return infant
  }


}

module.exports = Fairy;