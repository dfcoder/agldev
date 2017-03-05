const express = require('express');
const router = express.Router();
var http = require('http');

var url = 'agl-developer-test.azurewebsites.net'
/* GET api listing. */
router.get('/people', (req, peopleRes) => {
  var options = {
    host: url,
    port: 80,
    path: '/people.json',
    method: 'get'
  };

  http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (people) {
      console.log('BODY: ' + people);
      peopleRes.send(people);
    });
  }).end();

  
});

module.exports = router;