var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000,function () {
  console.log('Server up on port 3000');
})
//sudo netstat -lnp
//sudo kill sudo lsof -t -i:9001`
