const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','views');

app.use(express.static('public'));

//  route
const routes = require('./routes/routes.js');
//  use route
app.use('/', routes);
// controllers
const controller = require('./controllers/weather.js');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});