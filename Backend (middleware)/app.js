const express = require("express");
const app=express();

app.use(()=>{
    console.log("Hi, I am middleware");
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