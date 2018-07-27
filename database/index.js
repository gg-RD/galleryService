var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shoes";
var sampleData = require('./sampleData.js');


// insert fake data in shoe db in mongo
MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var shoesDb = db.db('shoes');
  
  shoesDb.dropCollection("shoes", function(err, delOK) {
	if (err) throw err;
	db.close();
  });


  shoesDb.collection("shoes").insertMany(sampleData , (err, res) => {
  	if(err) throw err;
  	db.close();
  })
});

// made getData a function that returns a promise (server can now access values in db using 'then')
var getData = new Promise (function(resolve, reject){
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
});




module.exports.getData = getData
