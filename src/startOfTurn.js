define(function(){
  return function(actions){
  if(actions){
    for(var i=0; i<actions.length; i++){
      actions[i].call();
    }
  }
};
});
