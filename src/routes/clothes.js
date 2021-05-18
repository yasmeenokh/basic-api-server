
'use strict'; 
/**
 * Requiring the express dependency and the clothes model class
 */
const express = require('express');
const Clothe = require('../models/clothes');
const clothes = new Clothe();
/**
 * make use of the Router lib 
 */
const router = express.Router();
/**
 * Calling our routes and their function
 */

router.get('/', getAllClothes);
router.get('/:id', getOneClothes);
router.post('/', addClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

/**
 * This function is used to get all clothes saved in the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} clothesObj
 */
function getAllClothes (request, response){
  const clothesObj = clothes.read();
  response.json(clothesObj);
}
/**
 * This function is used to get one clothes element from the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} clothesObj
 */
function getOneClothes (request, response){
  const clothesObj = clothes.read(request.params.id);
  response.json(clothesObj);
}
/**
 * This function is used to add one clothes element to the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} clothesObj, status
 */
function addClothes (request, response){
  const creatObj = request.body;
  console.log(creatObj);
  const clothesObj = clothes.create(creatObj);
  response.status(201).json(clothesObj);
}
/**
 * This function is used to update one clothes element to the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} clothesObj
 */
function updateClothes (request, response){
  const clothesObj = request.body;
  const updatedFood = clothes.update(request.params.id ,clothesObj);
  response.json(updatedFood);
}
/**
 * This function is used to delete one clothes element from the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} clothesObj
 */
function deleteClothes (request, response){
  const clothesObj = clothes.delete(request.params.id);
  response.json(clothesObj);
}  
/**
 * @typedef {exports(router)} 
 */
module.exports = router;

