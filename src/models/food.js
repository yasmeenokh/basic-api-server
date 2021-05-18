'use strict';
const uuid = require('uuid').v4;

class Food {
  constructor (){
    this.foodDb = [];
  }
  create (obj) {
    const food = {
      id : uuid(), 
      data : obj,
    };
    this.foodDb.push(food);
    return food;
  }
  read(id){
    if (id){
      return this.foodDb.find((record)=> record.id === id);
    } else {return this.foodDb;}

  }
  update(id, obj){
    for (let i = 0; i <this.foodDb.length; i++){
      let record = this.foodDb[i];
      if(record.id === id){
        this.foodDb[i].data = obj;
        return this.foodDb[i];
      }
    }
  }
    
  delete(id){
    this.foodDb = this.foodDb.filter((element=> element.id !== id));
    return this.foodDb;

  }
}

module.exports = Food;