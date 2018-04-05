var express = require('express');
var app = express();
var pg = require('pg');

var req = require("request");
var cheerio = require("cheerio");

//var session = require('express-session');
//var FileStore = require('session-file-store')(session);

var multer = require('multer');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/*app.get('/', function(request, response) {
  response.render('pages/index');
});*/

app.get('/', function(request, response) {
  response.render('pages/base',{action:'../../public/webpage/homepage.ejs'});
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
  response.render('pages/base',{action:'../../public/webpage/petForm.ejs'});
});

app.get('/pet_search', function(request, response) {
  response.render('pages/base',{action:'../../public/webpage/petSearch.ejs'});
});

app.get('/pet_shop', function(request, response) {
  response.render('pages/petShop');
});

app.get('/post_supply', function(request, response) {
  response.render('pages/shopForm');
});

app.get('/cart', function(request, response) {
  response.render('pages/cart');
});

app.get('/toPetSearch', function(request, response) {
  response.send('../webpage/petSearch.ejs');
});

app.get('/toPostAdoption', function(request, response) {
  response.send('../webpage/petForm.ejs');
});

app.get('/toHome', function(request, response) {
  response.send('../webpage/homepage.ejs');
});


app.get('/run_cat_scraper', function(request, response) {
  req("http://www.lap.org.hk/adoptcat.aspx", function (error,r, body) {
    if (!error) {
      var $ = cheerio.load(body);
      var data = $("[class='textdb12pt']>span");   
      var photo=$("[class='photoborder']");
      var returnList=[];
      for (var x=0; x<(data.length/5);x++){
        var pos=x*5;
        var obj={};
        var temp=(photo[x].attribs.src).replace("./","http://www.lap.org.hk/");
        obj['photo']=temp;
        obj['name']=data[pos].children[0].data;
        obj['breed']=data[pos+1].children[0].data;
        obj['age']=data[pos+2].children[0].data;
        obj['gender']=data[pos+3].children[0].data;
        returnList.push(obj);
      }
    }
    response.send(returnList);
  });
});

app.get('/run_dog_scraper', function(request, response) {
  req("http://www.lap.org.hk/adoptdog.aspx", function (error,r, body) {
    if (!error) {
      var $ = cheerio.load(body);
      var data = $("[class='textdb12pt']>span");   
      var photo=$("[class='photoborder']");
      var returnList=[];
      for (var x=0; x<(data.length/5);x++){
        var pos=x*5;
        var obj={};
        var temp=(photo[x].attribs.src).replace("./","http://www.lap.org.hk/");
        obj['photo']=temp;
        obj['name']=data[pos].children[0].data;
        obj['breed']=data[pos+1].children[0].data;
        obj['age']=data[pos+2].children[0].data;
        obj['gender']=data[pos+3].children[0].data;
        returnList.push(obj);
      }
    }
    response.send(returnList);
  });
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
        else if (result.length==null) {
          return response.send("cannot find user"); 
        }
       else
        { return response.send("success");}
      });
  });
});

app.post('/addPets', function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = 'INSERT INTO pets(name,type,breed,gender,age,postdate,lastupdate,status,remark,peturl,providerid,description,neutered,size,coat) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING petid'; 
	  var sqlValue = [request.body.name,request.body.type,request.body.breed,request.body.gender,request.body.age,request.body.postdate,request.body.lastupdate,request.body.status,request.body.remark,request.body.peturl,request.body.providerid,request.body.description,request.body.neutered,request.body.size,request.body.coat]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { console.error(err); return response.end("Error " + err); }
       else
        { return response.send(result.rows); }
      });
  });
});

app.get("/listInterest", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	   client.query("SELECT * FROM pets WHERE status='open'"+request.query.query+" order by petid DESC limit 12", function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
       else
        { return response.send(result.rows);   }
    });
  });
});


app.get("/listPet", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	   client.query("SELECT * FROM pets WHERE status='open'"+request.query.query+" order by petid DESC", function(err, result) {
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

app.get("/listSupply", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	   client.query("SELECT * FROM petsupply "+ request.query.query, function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
       else
        { return response.send(result.rows);   }
    });
  });
});

app.post('/addCart', function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = 'INSERT INTO cart(itemurl,name,quantity,price,userid) VALUES($1, $2, $3, $4, $5)'; 
	  var sqlValue = [request.body.itemurl,request.body.name,request.body.quantity,request.body.price, request.body.userid]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { console.error(err); return response.end("Error " + err); }
       else
        { return response.send("success");   }
      });
  });
});

app.post('/deleteCart', function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = 'delete from cart where userid = ($1) and name = ($2)'; 
	  var sqlValue = [request.body.userid, request.body.name]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { console.error(err); return response.end("Error " + err); }
       else
        { return response.send("success");   }
      });
  });
});

app.get("/listCart", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	   client.query("SELECT * FROM cart "+ request.query.query, function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
       else
        { return response.send(result.rows);   }
    });
  });
});



/*var identityKey = 'skey';

app.use(session({
    name: identityKey,
    secret: 'chyingp', 
    store: new FileStore(),  
    saveUninitialized: false, 
    resave: false, 
    cookie: {
        maxAge: 600 * 1000  
    }
}));

app.get('/', function(req, res) {
  if (req.session.cart) {
      var itemsInCart = req.session.cart.length;
  } else {
      req.session.cart = [];
  }
  res.render('index', {
      title: 'Shopping Cart',
      itemsInCart: itemsInCart,
      products: [
        {id: 1, item: 'something', price: 100},
    ]
  });
});

app.post('/', function(req, res) {
  if (req.body.action == 'Add to Cart') {
      req.session.cart.push(req.body.itemId);
      res.redirect('/');
  }
});



/*app.get('*', function(request, response) {
  response.redirect('/');
});*/


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
