var express=require('express');
var app=express();
var path=require ('path');
var async=require('async');
var request=require('request');



app.use('/', express.static('assets'));

app.get('/akashShukla',function(req,res)
{

 res.sendFile(__dirname + '/assets/views/index.html');
});



app.get('/data',function(req,res)
{
    async.parallel([

      function(callback) {


                var url = "https://raw.githubusercontent.com/akash707/Json-Data-API/master/db.json";
          request(url, function(err, response, body) {
             // JSON body

             if(err) { console.log(err); callback(true); return; }
             obj = JSON.parse(body);
             callback(false, obj);

           });


      },

      function(callback) {


         var url = "https://raw.githubusercontent.com/akash707/Json-Data-API/master/db1.json";
        request(url, function(err, response, body) {
          if(err) { console.log(err); callback(true); return; }
          obj = JSON.parse(body);

          callback(false, obj);

        });

    }
    ],


    function(err, results) {
  res.setTimeout(300000, function(){
      if(err) { console.log(err); res.send(500,"Server Error"); return; }
      res.send({api1:results[0], api2:results[1]});
 });
    }
    );
}
);


app.get('*',function(req,res)
{
  res.send("Not Found : This page doesn't exist");
});



app.listen('3000');
