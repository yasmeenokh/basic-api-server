'use strict';

const express= require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const logger = require('./middleware/logger');

const errorHandlers = require('./error-handlers/500');
const notFound = require('./error-handlers/404');


const foodRout = require('./routes/food');
const clothesRout = require('./routes/clothes');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(logger);
app.use('/api/v1/food', foodRout);
app.use('/api/v1/clothes', clothesRout);

app.get('/', (request, response)=>{
  response.send('Welcome To The SERVER.JS');
});

app.get('/bad', (request, response)=>{
  throw new Error('SOMETHING WENT WRONG');
});


app.use(errorHandlers);
app.use('*', notFound);

function start (PORT){
  app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
  });
}

module.exports= {
  app : app, 
  start : start,
};