// Generated by CoffeeScript 1.3.3
/*global require, __dirname, process
*/

(function(express, dir, port) {
  var app, open, people;
  if (port == null) {
    port = 3005;
  }
  people = [
    {
      "id": 0,
      "name": "Cary"
    }, {
      "id": 1,
      "name": "Saasha"
    }, {
      "id": 2,
      "name": "Planet"
    }
  ];
  app = express.createServer();
  open = function(command) {
    var ostype, spawn, url;
    if (command == null) {
      command = 'open';
    }
    url = "http://localhost:" + (app.address().port);
    ostype = require('os').type();
    if (ostype === 'Windows_NT') {
      command = 'explorer';
    }
    spawn = require('child_process').spawn;
    console.log("launching " + url);
    return spawn(command, [url]);
  };
  return app.configure(function() {
    app.set('view options', {
      layout: false
    });
    app.use(express.bodyParser());
    app.use(express["static"](dir));
    app.use(app.router);
    app.register('.html', {
      compile: function(str, options) {
        return function(locals) {
          return str;
        };
      }
    });
    app.get('/', function(req, res) {
      return res.render("" + dir + "/index.html");
    });
    app.get('/members', function(req, res) {
      return res.json(people);
    });
    app.post('/members', function(req, res) {
      var person;
      person = req.body;
      people.push(person);
      res.header('Authenticated', 'NOPE');
      return res.send('Conflictola', 401);
    });
    return app.listen(port, function() {
      console.log("Express server listening on port " + (app.address().port) + " in " + app.settings.env + " mode");
      return open();
    });
  });
})(require('express'), __dirname, process.argv.splice(2)[0]);
