
var Viking = function(name){
  this.name = name;
  this.health = 100-Math.floor(Math.random()*10);
  this.strength = Math.floor(Math.random()*10+5);
};

Viking.prototype.status = function(){
  console.log(this.name + " is " + this.health + "% of health and " + this.strength + " of strength.");
};

module.exports = Viking;
