var express=require('express');
var app=express();
var path=require ('path');


app.use('/', express.static('assets'));

app.get('/akashShukla',function(req,res)
{

 res.sendFile(__dirname + '/assets/views/index.html');
});

app.get('*',function(req,res)
{
  res.send("Not Found : This page doesn't exist");
});


app.listen('3000');
