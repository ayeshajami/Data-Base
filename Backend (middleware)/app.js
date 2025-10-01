const express = require("express");
const app=express();

// app.use((req,res,next)=>{
//     console.log("Hi, I am middleware");
//     next();
// });


//logger-morgan
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now());
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });
const checkToken=(req,res,next)=>{
    let{token}=req.query;
    if(token==="giveaccess"){
        res.send("Access Denied!");
    }
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.listen(8080,()=>{
    console.log("Server is listening to port 8080");
});