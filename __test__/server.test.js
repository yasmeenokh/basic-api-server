'use strict'; 

const server = require('../src/server');
const superTest = require('supertest');
const { it, expect } = require('@jest/globals');
const request = superTest(server.app);

describe('api server', ()=>{
  it('should give 404 status', async ()=>{
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
  });
  it('should give 404 status', async ()=>{
    const response = await request.post('/');
    expect(response.status).toBe(404);
  });
  it ('should give 500 error', async ()=>{
    const response = await request.get('/bad');
    expect (response.status).toBe(500);
  });
  
});

describe('Api Food', ()=>{
  let id;
  it('should create a new object using post', async()=>{
    let food = {
      name : 'apple',
      type : 'fruits',
    };
    const response = await request.post('/api/v1/food').send(food);

    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('apple');
    expect(response.body.data.type).toEqual('fruits');
    expect(response.body.id.length).toBeGreaterThan(0);
    id = response.body.id;
  });

  it('should update an object using put', async()=>{
    let editedFood = {
      name : 'apple',
      type : 'vegetable',
    };
    const response = await request.put(`/api/v1/food/${id}`).send(editedFood);
    expect(response.status).toEqual(200);
    expect(response.body.data.type).toEqual('vegetable');
  });

  it('should retrieve all data from the DB', async()=>{
    const response = await request.get('/api/v1/food');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('get a food using Get /food/:id', async () => {
    const response = await request.get(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('apple');
    
  });
  it('should be able to delete data from the DB', async()=>{
    const response = await request.delete(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });
});

describe('Api clothes', ()=>{
  let id;
  it('should create a new object using post', async()=>{
    let food = {
      name : 'T-shirt',
      type : 'men',
    };
    const response = await request.post('/api/v1/clothes').send(food);

    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('T-shirt');
    expect(response.body.data.type).toEqual('men');
    expect(response.body.id.length).toBeGreaterThan(0);
    id = response.body.id;
  });

  it('should update an object using put', async()=>{
    let editedFood = {
      name : 'T-shirt',
      type : 'women',
    };
    const response = await request.put(`/api/v1/clothes/${id}`).send(editedFood);
    expect(response.status).toEqual(200);
    expect(response.body.data.type).toEqual('women');
  });
  
  it('should retrieve all data from the DB', async()=>{
    const response = await request.get('/api/v1/clothes');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('get a clothes using Get /clothes/:id', async () => {
    const response = await request.get(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('T-shirt');
    
  });

  it('should be able to delete data from the DB', async()=>{
    const response = await request.delete(`/api/v1/clothes/${id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);

  });


});