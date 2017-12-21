var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('pages/index');
});


app.get('/login', function(request, response) {
  response.render('pages/login');
});


app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});


app.get("/regist", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = "insert into user_table(username,password,nickname) values(?,?,?)"; 
	  var sqlValue = [request.query.username, request.query.password, request.query.nickname]; 
	  client.query(sql, sqlValue, function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
       else
        { return response.send("success");   }
      });
  });
});

/*app.get("/signIn", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = "select * from user_table where username='" + request.query.username + "' and password='" + request.query.password + "'"; 
	  client.query(sql, function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
	   else if (result.length == 0) {
			console.log(result);
			return response.send("cannot find user"); 
	   }
       else
        { return res.send(result);   }
      });
  });
});

app.get("/getUserData", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = "select * from user_table"; 
	  client.query(sql, function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
       else
        { return res.send(result);   }
      });
  });
});*/


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
