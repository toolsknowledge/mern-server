//import the modules
//require() function used to import the modules
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongodb = require("mongodb");


//create the rest object
const app = express();


//set the json as MIME Type
app.use(bodyparser.json());


//parse the json
app.use(bodyparser.urlencoded({extended:false}));


//enable the cors policy
app.use(cors());


//create the reference variable to connect to mongodb database
const ashkoIT = mongodb.MongoClient;
//where "ashkoIT" is the reference variable


//create the get request
app.get("/products",(req,res)=>{
    ashkoIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/uiproject?retryWrites=true&w=majority",(err,connection)=>{   
        if(err) throw err;
        else{
            const db = connection.db("uiproject");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    });
});


//assign the port number
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server strted successfully");
});

















