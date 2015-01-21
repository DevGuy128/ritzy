//Before you start, you need jQuery.
if(typeOf jQuery == "undefined"){
  throw "jQuery is needed for ritzy to work.";
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
    if(typeOf attributes !== "array"){
      throw "Attributes of gameController not a name";
    }
    
  };
});
