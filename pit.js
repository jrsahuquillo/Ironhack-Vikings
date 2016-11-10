var Viking = require("./viking.js");

function Pit(viking1, viking2) {
  this.totalRounds = 10;
  this.viking1 = viking1;
  this.viking2 = viking2;
  this.fight = function() {
    var i=0;
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
};
}


var viking1 = new Viking("Olaf");
var viking2 = new Viking("Adils");

viking1.status();
viking2.status();

pit1 = new Pit(viking1, viking2);
pit1.fight();
