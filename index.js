var express = require('express');
var app = express();
var pg = require('pg');

var req = require("request");
var cheerio = require("cheerio");

var session = require('express-session');
var FileStore = require('session-file-store')(session);

var multer = require('multer');
var bodyParser = require('body-parser');

//var chatServer = require('./mychat/chat-server');
//app.use(app.router);
var server = require('http').createServer(app); 


//server.listen(5000);

app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//testing
server.listen(process.env.PORT || 5000);
//app.set('port', (process.env.PORT || 5000));
chatServer.listen(server);

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/*app.get('/', function(request, response) {
  response.render('pages/index');
});*/

app.use(session({
  name: 'Adopets Web',
  secret: 'Adopets Web',
  store: new FileStore(),
  cookie: {
      maxAge: 60 * 1000 * 60
  }
}));

app.get('/', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/homepage.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/index', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/homepage.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/getlogined', function(request, response){
  var loginUser=request.session.loginUser;
  var isLogined = !!loginUser;
  return response.send({isLogined:isLogined,loginUser:loginUser||""})
})

app.get('/login', function(request, response) {
  response.render('pages/login');
});

app.get('/register', function(request, response) {
  response.render('pages/login');
});

app.get('/search_service', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/searchService.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/post_adoption', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/petForm.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/pet_search', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/petSearch.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/pet_shop', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/petShop.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/post_supply', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/shopForm.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/cart', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/cart.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/forum', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/forum.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/chatroom', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/chatroom.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/profile', function(request, response) {
  var sess = request.session;
  var loginUser=sess.loginUser;
  var isLogined = !!loginUser;
  response.render('pages/base',{action:'../../public/webpage/profile.ejs',isLogined:isLogined,loginUser:loginUser||""});
});

app.get('/toPetSearch', function(request, response) {
  response.send('../webpage/petSearch.ejs');
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
	  var sqlValue = [request.query.userid,"","",request.query.email,000,"",new Date(0),false,"","",request.query.password]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
       else
        { return response.send("success");   }
      });
  });
});

app.get("/signin", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  client.query("SELECT * FROM users WHERE userid IN " +request.query.username+" AND password IN "+request.query.password, function(err, result) {
       done();
       if (err)
        { console.error(err); return response.send("Error " + err); }
        else if (result.rows.length==0) {
          return response.send("No Found"); 
        }
       else{ 
         request.session.loginUser=result.rows[0].userid;
         return response.send(result.rows);
        }
      });
  });
});

app.get("/userLogout", function (request, response) { 
  request.session.destroy(function(err) {
    if(err){
        return response.send("error");
    }
    response.clearCookie('Adopets Web');
    return response.send("success");
  });

});

app.get("/listPostTitle", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  client.query("SELECT * FROM topics WHERE category IN " +request.query.category+" order by postdate DESC limit 50", function(err, result) {
       done();
       if (err)
        { return response.send("Error " + err); }
       else{ 
         return response.send(result.rows);
        }
      });
  });
});

app.get("/listPostContent", function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  client.query("SELECT * FROM posts WHERE topic IN " +request.query.topic+" order by postid ASC limit 50", function(err, result) {
       done();
       if (err)
        { return response.send("Error " + err); }
       else{ 
         return response.send(result.rows);
        }
      });
  });
});

app.post('/addNewPost', function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = 'INSERT INTO topics(subject,category,postby,replynum) VALUES($1, $2, $3, $4) RETURNING topicid,subject,postby,replynum'; 
	  var sqlValue = [request.body.subject,request.body.category,request.body.postby,request.body.replynum]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { return response.send("Error " + err); }
       else
        { 
          var sql2='INSERT INTO posts(content,topic,postby,replyprev) VALUES($1, $2, $3, $4)';
          var sqlValue2 =[request.body.content,result.rows[0].topicid,request.body.postby,request.body.replyprev];
          client.query(sql2,sqlValue2,function(error,result2) {
            done();
            if (error)
             { return response.send(error); }
            else
             { 
              return response.send(result.rows);
             }
           });
        }
      });
  });
});

app.post('/addNewReply', function (request, response) { 
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  var sql = 'INSERT INTO posts(content,topic,postby,replyprev,replyprevid,replyprecontent) VALUES($1, $2, $3, $4, $5, $6) RETURNING content,postby,postdate,replyprecontent,postid'; 
	  var sqlValue = [request.body.content,request.body.topic,request.body.postby,request.body.replyprev,request.body.replyprevid,request.body.replyprecontent]; 
	  client.query(sql,sqlValue,function(err,result) {
       done();
       if (err)
        { return response.send("Error " + err); }
       else
        { 
          var sql2="UPDATE topics set replynum=replynum+1,postdate=DEFAULT WHERE topicid='"+request.body.topic+"'";
          client.query(sql2,function(error,result2) {
            done();
            if (error)
             { return response.send(error); }
            else
             { 
              return response.send(result.rows);
             }
           });
        }
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


/*app.get('*', function(request, response) {
  response.redirect('/');
});*/


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
