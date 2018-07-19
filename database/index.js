var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoes');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
	// console.log('connection successful');

	var shoeSchema = mongoose.Schema({
		name: String,
		colors: []
	});

	var Shoes = mongoose.model('Shoes', shoeSchema);

	var kobe8 = new Shoes({name: 'kobe8', colors: ['red']});

	kobe8.save(function(err, kobe8){
		if(err){
			return console.error(err);
		}

	})
})