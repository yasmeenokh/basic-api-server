'use strict';
const uuid = require('uuid').v4;
/**
 * Clothe is an example class for my Food constructor.
 * @class
 * @constructor
 * @public
 */

class Food {
  constructor (){
    this.foodDb = [];
  }
  /**
       * create is an example property that sets the food obj
       * @type {number}
       * @type {obj}
       * @returns {obj}
       */
  create (obj) {
    const food = {
      id : uuid(), 
      data : obj,
    };
    this.foodDb.push(food);
    return food;
  }
  /**
       * create is an example property that sets the food obj
       * @type {number}
       * @returns {Array}
       */
  read(id){
    if (id){
      return this.foodDb.find((record)=> record.id === id);
    } else {return this.foodDb;}

  }
  /**
       * create is an example property that sets the food obj
       * @type {number}
       * @returns {obj}
       */
  update(id, obj){
    for (let i = 0; i <this.foodDb.length; i++){
      let record = this.foodDb[i];
      if(record.id === id){
        this.foodDb[i].data = obj;
        return this.foodDb[i];
      }
    }
  }
  /**
       * create is an example property that sets the food obj
       * @type {number}
       * @returns {Array}
       */
  delete(id){
    this.foodDb = this.foodDb.filter((element=> element.id !== id));
    return this.foodDb;

  }
}
/**
 * @typedef {exports(Food)} 
 */
module.exports = Food;