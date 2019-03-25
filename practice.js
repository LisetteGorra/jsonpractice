const express = require("express");
const app = express();

app.use('/', function(req,res){
   res.send('Hello CareerDevs');
});


const port = process.env.PORT;
const ip = process.env.IP;

app.listen(port, ip, function(){
    console.log('App listening on port: ${port}');
    
})