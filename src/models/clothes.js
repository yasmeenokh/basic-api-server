'use strict';
const uuid = require('uuid').v4;
// const Food = require('./food');

// class Clothe extends Food {
  
// }

class Clothe {
  constructor (){
    this.clothesDb = [];
  }
  create (obj) {
    const clothes = {
      id : uuid(), 
      data : obj,
    };
    this.clothesDb.push(clothes);
    return clothes;
  }
  read(id){
    if (id){
      return this.clothesDb.find((record)=> record.id === id);
    } else {return this.clothesDb;}
  
  }
  update(id, obj){
    for (let i = 0; i <this.clothesDb.length; i++){
      let record = this.clothesDb[i];
      if(record.id === id){
        this.clothesDb[i].data = obj;
        return this.clothesDb[i];
      }
    }
  }
      
  delete(id){
    this.clothesDb = this.clothesDb.filter((element=> element.id !== id));
    return this.clothesDb;
  
  }
}
  
module.exports = Clothe;