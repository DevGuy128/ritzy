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
var charge = function(){
  
};
var movementPhase = [];
$(document).ready(function(){
  var canvasdocument = getElementsByName("canvas");
  if(canvasdocument<1){
    throw "No canvases in document.";
  }
});
