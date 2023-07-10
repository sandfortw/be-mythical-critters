class Sphinx{
  constructor(){
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle){
    this.riddles.push(riddle);
    if(this.riddles.length > 3){
      this.riddles.shift();
    }
  }

  attemptAnswer(answer){
    for (let i = 0; i < this.riddles.length; i++){
      if(this.riddles[i].answer === answer){
        this.riddles.splice(i, 1)
        var response1 = 'That wasn\'t that hard, I bet you don\'t get the next one'
        var response2 = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
        return this.riddles.length === 0 ? response2 : response1
      }
    }
    this.heroesEaten++ 
  }


}

module.exports = Sphinx;