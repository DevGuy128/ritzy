define(function(){
  return function(m,ws,bs,s,t,w,i,a,ld,rules,img){
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
    this.img = getImage(img);
  };
});
