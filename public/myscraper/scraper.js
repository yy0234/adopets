var request = require("request");
var cheerio = require("cheerio");

var url = "http://www.lap.org.hk/adoptcat.aspx";

// 取得網頁資料
request(url, function (error, response, body) {
  if (!error) {

    var $ = cheerio.load(body);

    var data = $("[class='textdb12pt']>span");
	var returnList=[];

	for (var x=0; x<(data.length/5);x++){
		var pos=x*5;
		var obj={};
		obj['name']=data[pos].children[0].data;
		obj['breed']=data[pos+1].children[0].data;
		obj['age']=data[pos+2].children[0].data;
		obj['sex']=data[pos+3].children[0].data;
		obj['detail']=data[pos+4].children[0].data;
		returnList.push(obj);
	}
		
	console.log(returnList);

  } else {
    console.log("擷取錯誤：" + error);
  }
});