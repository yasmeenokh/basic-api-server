'use strict'; 
/**
 * Requiring the express dependency and the clothes model class
 */
const express = require('express');
const Food = require('../models/food');
const food = new Food();
/**
 * make use of the Router lib 
 */
const router = express.Router();
/**
 * Calling our routes and their function
 */
router.get('/', getAllFood);
router.get('/:id', getOneFood);
router.post('/', addFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

/**
 * This function is used to get all clothes saved in the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} foodObj
 */
function getAllFood (request, response){
  const foodObj = food.read();
  response.json(foodObj);
}
/**
 * This function is used to get one clothes element from the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} foodObj
 */
function getOneFood (request, response){
  const foodObj = food.read(request.params.id);
  response.json(foodObj);
}
/**
 * This function is used to add one clothes element to the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} foodObj, status
 */
function addFood (request, response){
  const creatObj = request.body;
  console.log(creatObj);
  const foodObj = food.create(creatObj);
  response.status(201).json(foodObj);
}
/**
 * This function is used to update one clothes element to the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} foodObj
 */
function updateFood (request, response){
  const foodObj = request.body;
  const updatedFood = food.update(request.params.id ,foodObj);
  response.json(updatedFood);
}
/**
 * This function is used to delete one clothes element from the db
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json} foodObj
 */
function deleteFood (request, response){
  const foodObj = food.delete(request.params.id);
  response.json(foodObj);
}  
/**
 * @typedef {exports(router)} 
 */
module.exports = router;