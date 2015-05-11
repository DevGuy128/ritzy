define(function(){
  return function(description,action,toAffect){
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
});
