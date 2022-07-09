const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var n1=req.body.num1;
    var n2=req.body.num2;
    var sum=Number(n1)+Number(n2);
    res.send("The calculated result is:"+sum);
});
app.listen(3000,function(){
    console.log("Server started successfully at port 3000 ")
});