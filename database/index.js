var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shoes";
var sampleData = require('./sampleData.js');



//insert fake data in shoe db in mongo
var dbSetup = new Promise(function(resolve,reject){
	MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
	  var shoesDb = db.db('shoes');
	  
	  shoesDb.dropCollection("shoes", function(err, delOK) {
		if (err) throw err;
		shoesDb.collection("shoes").insertMany(sampleData , (err, res) => {

		  	if(err) throw err;
			resolve(res.ops[0]);
			db.close();
		  })
	  });
	});
})





module.exports.getData = dbSetup
