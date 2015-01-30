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
}
$(document).ready(function(){
  var canvasdocument = getElementsByName("canvas");
  if(canvasdocument<1){
    throw "No canvases in document.";
  }
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
});
