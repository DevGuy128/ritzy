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

