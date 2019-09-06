var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var path = require('path');
const axios = require('axios')

const BACKEND_URI = `http://${process.env.VOTING_API_ADDR}/vote`

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/results', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

app.get('/vote', async (req, res) => {
  axios.get(BACKEND_URI)
    .then(response => {
        res.send(response.data);
    }).catch(error => {
      console.error('error: ' + error)
      res.send(error);
  });
});

app.post('/vote', async (req, res) => {
  axios.post(BACKEND_URI, req.body).then(response => {
      console.log(`response from ${BACKEND_URI}` + response)
      res.send(response.data);
  }).catch(error => {
      console.error('error: ' + error)
      res.send(error);
  })
});

app.listen(8080, () => console.log('Nodejs Frontend listening on port 8080!'))