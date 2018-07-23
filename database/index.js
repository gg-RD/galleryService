var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shoes";
var sampleData = require('./sampleData.js');

// fake data 
var flyknit = {
  id: 0,
  name: 'flyknit',
	colors: [
	  {
	    color: 'black',
	    img1: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/black/img1.png',
	    img2: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/black/img2.png',
	    img3: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/black/img3.png',
	    img4: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/black/img4.png'
	  },
	  {
		color: 'blue',
		img1: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/blue/img1.png',
		img2: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/blue/img2.png',
		img3: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/blue/img3.png',
		img4: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/blue/img4.png'
	  },
	  {
	  	color: 'brown',
	  	img1: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/brown/img1.png',
	  	img2: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/brown/img2.png',
	  	img3: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/brown/img3.png',
	  	img4: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/brown/img4.png'
	  },
	  {
	  	color: 'red-white',
	  	img1: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/red-white/img1.png',
	  	img2: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/red-white/img2.png',
	  	img3: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/red-white/img3.png',
	  	img4: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/red-white/img4.jpg'
	  },
	  {
	  	color: 'white',
	  	img1: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/white/img1.png',
	  	img2: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/white/img2.png',
	  	img3: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/white/img3.png',
	  	img4: 'https://s3-us-west-1.amazonaws.com/hrsf98-fec/flyknit/white/img4.jpg'
	  }
	]
}; 

sampleData.unshift(flyknit);
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

// made getData a function that returns a promise (server can now access values in db)
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
