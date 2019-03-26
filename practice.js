const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
app.use("/", express.static("public"));

app.get("/api/get", (req,res)=>{
    res.send("This is a responce from Homeabase");
})

app.post("/api/post", (req, res)=>{
    res.send(req.body);
})

const port = process.env.PORT;
const ip = process.env.IP;

app.listen(port, ip, function(){
    console.log(`App listening on port: ${port}`);
    console.log(`App is running on ip: ${ip}`);
})