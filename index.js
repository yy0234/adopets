var express = require('express');
var app = express();
var pg = require('pg');

var multer = require('multer');
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


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

app.get('/register', function(request, response) {
  response.render('pages/login');
});

app.get('/search_service', function(request, response) {
  response.render('pages/searchService');
});

app.get('/post_adoption', function(request, response) {
  response.render('pages/petForm');
});

app.get('/pet_search', function(request, response) {
  response.render('pages/petSearch');
});

app.get('/pet_shop', function(request, response) {
  response.render('pages/petShop');
});

app.get('/post_supply', function(request, response) {
  response.render('pages/shopForm');
});

app.get('/testing', function(request, response) {
  //response.render('pages/testing2',{action:'../pages/testing1.ejs'});
  response.render('pages/testing2');
});

app.get('/testing2', function(request, response) {
  response.send('../pages/testing1.ejs');
});



/*app.get('/image_search', function(request, response) {
  response.render('pages/imageSearch');
});*/

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM users', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

app.get('/regist', function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = 'INSERT INTO users(userid,lastname,firstname,email,telnum,address,birthday,havepet,typeofpet,userurl,password) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'; 
	  var sqlValue = [request.query.userid,request.query.lastname,request.query.firstname,request.query.email,request.query.telnum,request.query.address,request.query.birthday,false,"","",request.query.password]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
       else
        { return response.send("register success");   }
      });
  });
});

app.get("/signin", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = "SELECT * FROM users where userid='" + request.query.username + "' and password='" + request.query.password + "'"; 
	  client.query(sql, function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
	   else if (result.length == 0) {
			return response.send("cannot find user"); 
	   }
       else
        { return response.send("login success");}
      });
  });
});

app.post('/addPets', function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = 'INSERT INTO pets(name,type,breed,gender,age,postdate,lastupdate,status,remark,peturl,providerid,description,neutered,size,coat) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)'; 
	  var sqlValue = [request.body.name,request.body.type,request.body.breed,request.body.gender,request.body.age,request.body.postdate,request.body.lastupdate,request.body.status,request.body.remark,request.body.peturl,request.body.providerid,request.body.description,request.body.neutered,request.body.size,request.body.coat]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { console.error(err); return response.end("Error " + err); }
       else
        { return response.send("success");   }
      });
  });
});


app.get("/listPet", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	   client.query("SELECT * FROM pets WHERE status='open'"+request.query.query+" order by postdate DESC", function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
       else
        { return response.send(result.rows);   }
    });
  });
});

app.post('/addSupply', function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = 'INSERT INTO petsupply(supplyid,name,description,price,type,postdate,lastupdate,status,remark,supplyurl,providerid,quantity,pettype) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'; 
	  var sqlValue = [request.body.supplyid, request.body.name, request.body.description, request.body.price, request.body.type, request.body.postdate, request.body.lastupdate, request.body.status, request.body.remark, request.body.supplyurl, request.body.providerid, request.body.quantity, request.body.pettype]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { console.error(err); return response.end("Error " + err); }
       else
        { return response.send("success");   }
      });
  });
});

/*app.get('*', function(request, response) {
  response.redirect('/');
});*/


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
