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

const projectData = { entry: 'hi' };

app.get('/entries', (req, res) => {
  res.send(projectData);
});

app.post('/entry', (req, res) => {
  console.log(req.body);
  // TODO: add req.body to projectData:
  // temperature
  // date
  // user response
});
