const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');
function main () {
    let app1 = express(); // Export app for other routes to use
    //let handlers = new HandlerGenerator();
    const port = 100;
    app1.use(bodyParser.urlencoded({ // Middleware
      extended: true
    }));
    app1.use(bodyParser.json());
    // Routes & Handlers
    //app.post('/login', handlers.login);
    //app.get('/', middleware.checkToken, handlers.index);
    app1.listen(port, () => console.log(`Server is listening on port: ${port}`));
  }
  
  main();