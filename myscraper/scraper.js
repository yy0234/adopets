var req = require("request");
var cheerio = require("cheerio");

var url = "http://www.lap.org.hk/adoptdog.aspx";

// 取得網頁資料
req(url, function (error, response, body) {
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
		obj['sex']=data[pos+3].children[0].data;
		returnList.push(obj);
	}
		
	console.log(returnList);

  } else {
    console.log("擷取錯誤：" + error);
  }
});