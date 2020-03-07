const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const router = express.Router();
const session = require('express-session');

class RouteManager {
  makeRouter(port, assets, errorRenders = { notFound: '-' }) {
    http.listen(`${port}`, function() {
      console.log('Listening on *:' + port);
    });

    app.use('/', router);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(assets));

    router.use(
      session({
        secret: 'secret:key:sRy!bn0%f[key.data]',
        saveUninitialized: true,
        resave: false
      })
    );
  }

  addRoute(path, render, functionObject) {
    router.get(path, (res, req, next) => {
      const thisRender = render;
      functionObject(thisRender, res, req);
    });
  }

  addExtendedRoute(path, render, functionObject, authObject) {
    router.get(path, authObject, function(req, res) {
      const thisRender = render;
      functionObject(thisRender, req, res, authObject);
    });
  }

  addAuthUtil(req, res, next) {
    if (!req.session.user_id) {
      res.render('errors/403.ejs');
    } else {
      next();
    }
  }

  addPost(path, functionObject) {
    app.post(path, (req, res) => {
      functionObject(req, res);
    });
  }

  handleErrors() {
    app.use(function(req, res, next) {
      res.status(404).render('errors/404.ejs');
    });
  }
}

module.exports = new RouteManager();