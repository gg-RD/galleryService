const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3003;

const db = require('../database/index.js');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
// Getting info from db

// grab promise from db and use result as data
db.getData().then(function(result){
	
	var urlName = result.name;
	urlName = urlName.replace(/\s/g,'');
	app.get('/'+urlName, function(req, res){
		// send client side data from db to http://localhost:3003/data
		res.send(JSON.stringify(result));
	})
}).catch(function(err){
	console.log('there was an error');
	throw err;
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});