'use strict'; 

module.exports = (request, response, next) => {
  console.log('REQUEST INFORMATION :', request.method, request.path);
  next();
};