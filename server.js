const express = require('express');
const cors = require('cors');
const app = express();

/**
 * Use the out-of-the-box express.json() option over the outdated option of adding body-parser
 * middleware to handle POST requests
 */
app.use(express.json());

// Enable CORS for all requests
app.use(cors());

// Initialize project
app.use(express.static('client'));

const port = 3000;
const listening = () => {
  console.log('server started and listening on port', port);
};
const server = app.listen(port, listening);
