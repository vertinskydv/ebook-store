const express = require('express');
const api = require('./api');
require('dotenv').config();

const app = express();
app.use(api);
app.listen(process.env.SERVER_PORT, () => {
  console.log(`App listening on port ${process.env.SERVER_PORT}!`);
});
