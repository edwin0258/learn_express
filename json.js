var express = require('express')
var app = express();
var fs = require('fs')
app.get('/books', function(req, res){
    var data = fs.readFile(process.argv[3], function(err, data){
        if(err) throw err;
        
        var books = JSON.parse(data)
        res.json(books);
    });
    
})
app.listen(process.argv[2])