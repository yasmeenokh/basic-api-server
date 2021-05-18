'use strict'; 

const express = require('express');
const Food = require('../models/food');
const food = new Food();
const router = express.Router();

router.get('/', getAllFood);
router.get('/:id', getOneFood);
router.post('/', addFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

function getAllFood (request, response){
  const foodObj = food.read();
  response.json(foodObj);
}

function getOneFood (request, response){
  const foodObj = food.read(request.params.id);
  response.json(foodObj);
}

function addFood (request, response){
  const creatObj = request.body;
  console.log(creatObj);
  const foodObj = food.create(creatObj);
  response.status(201).json(foodObj);
}

function updateFood (request, response){
  const foodObj = request.body;
  const updatedFood = food.update(request.params.id ,foodObj);
  response.json(updatedFood);
}
function deleteFood (request, response){
  const foodObj = food.delete(request.params.id);
  response.json(foodObj);
}  

module.exports = router;