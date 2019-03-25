const express = require("express");
const app = express();

// app.use('/', function(req,res){
//   res.send('Hello CareerDevs');
// });

app.get("/api/get", (req,res)=>{
    res.send("This is a responce from Homeabase");
})

app.post("/api/post", (req, res)=>{
    res.send();
})

const port = process.env.PORT;
const ip = process.env.IP;

app.listen(port, ip, function(){
    console.log(`App listening on port: ${port}`);
    console.log(`App is rining on ip: ${ip}`);
})