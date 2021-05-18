

'use strict'; 

const express = require('express');
const Clothe = require('../models/clothes');
const clothes = new Clothe();
const router = express.Router();

router.get('/', getAllClothes);
router.get('/:id', getOneClothes);
router.post('/', addClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);


function getAllClothes (request, response){
  const foodObj = clothes.read();
  response.json(foodObj);
}
  
function getOneClothes (request, response){
  const foodObj = clothes.read(request.params.id);
  response.json(foodObj);
}
  
function addClothes (request, response){
  const creatObj = request.body;
  console.log(creatObj);
  const foodObj = clothes.create(creatObj);
  response.status(201).json(foodObj);
}
  
function updateClothes (request, response){
  const foodObj = request.body;
  const updatedFood = clothes.update(request.params.id ,foodObj);
  response.json(updatedFood);
}
function deleteClothes (request, response){
  const foodObj = clothes.delete(request.params.id);
  response.json(foodObj);
}  

module.exports = router;

