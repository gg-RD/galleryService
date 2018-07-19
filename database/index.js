var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shoes";

// fake data
var airJordan1 = {
  name: 'Air Jordan 1',
	colors: [
	  {
	    color: 'black',
		img1: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/AirJordan1/img1.png',
		img2: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/AirJordan1/img2.png',
		img3: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/AirJordan1/img3.png'
	  },
	  {
		color: 'red',
		img1: 'fill in',
		img2: 'fill in',
		img3: 'fill in'
	  }
	]
}; 
// insert fake data in shoe db in mongo
MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var shoesDb = db.db('shoes');
  
  shoesDb.collection("shoes").insertOne(airJordan1, (err, res) => {
  	if(err){
  		throw err;
  	}
  	console.log('air jordan inserted into shoe db');
  	db.close();
  })
});

var getData = () => {
	return new Promise(function(resolve, reject){
		MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
		  if (err) throw err;
		  var shoesDb = db.db("shoes");

		  shoesDb.collection("shoes").findOne({}, function(err, result) {
		    if(err){
		    	reject(err)
		    } else{
		    	resolve(result);
		    }
		    db.close();
		  });
		});
	})
}

module.exports.getData = getData
