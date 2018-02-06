var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/translate/:to/:text', (req, res) => {
  console.log('GET');
  console.log(req.params);

  var config = {
    headers: { 'Ocp-Apim-Subscription-Key': 'afe09724e2514f128448bf4b2fef5755' }
  };
  axios
    .get(
      'http://api.microsofttranslator.com/V2/Http.svc/Translate?to=' + req.params.to + '&text=' + req.params.text,
      config
    )
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.listen(8080);
console.log('Listening on port 8080');
