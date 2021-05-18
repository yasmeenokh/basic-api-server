'use strict';
const uuid = require('uuid').v4;
// const Food = require('./food');

// class Clothe extends Food {
  
// }

/**
 * Clothe is an example class for my Clothes constructor.
 * @class
 * @constructor
 * @public
 */

class Clothe {
  constructor (){
    this.clothesDb = [];
  }
  /**
       * create is an example property that sets the clothes obj
       * @type {number}
       * @type {obj}
       * @returns {obj}
       */
  create (obj) {
    const clothes = {
      id : uuid(), 
      data : obj,
    };
    this.clothesDb.push(clothes);
    return clothes;
  }
  /**
       * create is an example property that sets the clothes obj
       * @type {number}
       * @returns {Array}
       */
  read(id){
    if (id){
      return this.clothesDb.find((record)=> record.id === id);
    } else {return this.clothesDb;}
  
  }
  /**
       * create is an example property that sets the clothes obj
       * @type {number}
       * @returns {obj}
       */
  update(id, obj){
    for (let i = 0; i <this.clothesDb.length; i++){
      let record = this.clothesDb[i];
      if(record.id === id){
        this.clothesDb[i].data = obj;
        return this.clothesDb[i];
      }
    }
  }
  /**
       * create is an example property that sets the clothes obj
       * @type {number}
       * @returns {Array}
       */
  delete(id){
    this.clothesDb = this.clothesDb.filter((element=> element.id !== id));
    return this.clothesDb;
  
  }
}
/**
 * @typedef {exports(Clothe)} 
 */
module.exports = Clothe;