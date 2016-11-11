var Viking = require("./viking.js");

function Pit(viking1, viking2) {
  this.totalRounds = 10;
  this.viking1 = viking1;
  this.viking2 = viking2;
  this.fight = function() {
    var i=1;
    while (i <= this.totalRounds && (this.viking1.health > 0) && (this.viking2.health > 0)) {
      this.viking1.health = this.viking1.health-this.viking2.strength;
      this.viking2.health = this.viking2.health-this.viking1.strength;

      console.log("Round: " + i++ + ":");
      console.log(this.viking1.name + " has " + this.viking1.health);
      console.log(this.viking2.name + " has " + this.viking2.health);

    if ((this.viking1.health < this.viking2.strength) || (this.viking2.health < this.viking1.strength)) {
      break;
    }
  }
  if (this.viking1.health > this.viking2.health) {
    console.log('\x1b[32m', this.viking1.name + " won in round "+ (i-1) +"!!!",'\x1b[0m');
  } else {
    console.log('\x1b[32m', this.viking2.name + " won in round "+ (i-1) +"!!!",'\x1b[0m');
  }
};
}


var viking1 = new Viking("Olaf");
var viking2 = new Viking("Adils");

viking1.status();
viking2.status();

pit1 = new Pit(viking1, viking2);
pit1.fight();
