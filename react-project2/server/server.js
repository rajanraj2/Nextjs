// import express from 'express';

// const app = express();
// const port = 5000;

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!');
//     }
// );

// app.listen(port, () => console.log('Server is running on http://localhost:5000'));


import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './router/routes.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const routes = require('./routes');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api', routes);

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

