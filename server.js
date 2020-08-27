var express = require('express')
var path = require('path')
var app = express()

app.get('/',function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3001, function(){
	console.log('Server levantaso en el puerto 3001');
});