var model = function(m,ws,bs,s,t,w,i,a,ld,rules,img){
  //Defining properties
  if(typeof rules !== array){
    throw "Rules aren't an array";
  }
  this.movement = m;
  this.ballisticSkill = bs;
  this.weaponSkill = ws;
  this.strength = s;
  this.toughness = t;
  this.wounds = w;
  this.initiative = i;
  this.attacks = a;
  this.leadership = ld;
  this.img = $.get(img,function(data){
    this.img = data;
  });
};
var gameController = function(name,attributes){
    if(typeOf name !== "string"){
      throw "name of gameController not string.";
    }
    if(typeOf attributes !== "attributes"){
      throw "Attributes of gameController not a name";
    }
    this.attributes = attributes;
    this.name = name;
};

module.exports = []
