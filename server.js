const express = require('express');
const cors = require('cors');

const app = express();

/**
 * Use the out-of-the-box express.json() and express.urlencoded() methods over the outdated option
 * of adding body-parser middleware to handle POST requests
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Enable CORS for all requests
app.use(cors());

// Initialize project
app.use(express.static('client'));

// Server
const port = 3000;
const listening = () => {
  // eslint-disable-next-line no-console
  console.log('server started and listening on port', port);
};
app.listen(port, listening);

// Serves as "database" to hold project data
let projectData = {};

// GET route
app.get('/entries', (req, res) => {
  res.send(projectData);
});

// POST route
app.post('/entry', (req, res) => {
  projectData = req.body;
  res.send({ success: true, message: 'Success' });
});
