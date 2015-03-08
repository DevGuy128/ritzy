//Before you start, you need jQuery.
if(typeOf jQuery == "undefined"){
  throw "jQuery is needed for ritzy to work.";
}
var rule = function(description,action,toAffect){
  if(typeof toAffect !== "model"){
    throw "To affect is not a model.";
  }
  if(typeof description !== "string" ){
    throw "Description is not a string.";
  }
  if(typeof action !== "function"){
    throw "Action is not function.";
  }
};
var attributes =function(rules){
  for(var i = 0; i>rules.length; i++;){
    if(typeof rules[i] !== "rule"){
      throw "Attribute is not rule.";
    }
  }
};

var model = function(m,ws,bs,s,t,w,i,a,ld,rules){
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
var Player = function(name,type){
  this.name = name;
  this.type = type;
};
var startOfTurn = function(actions){
  if(actions){
    for(var i=0; i<actions.length; i++){
      actions[i].call();
    }
  }
};
var charge = function(){};
var movementPhase = [];
$(document).ready(function(){
  var canvasdocument = getElementsByName("canvas");
  if(canvasdocument<1){
    throw "No canvases in document.";
  }
});
