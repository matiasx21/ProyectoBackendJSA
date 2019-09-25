var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config/properties.json");
var tipoObjetoRouter = require("./routes/tipoObjeto");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
     "PUT, POST, GET, DELETE, OPTIONS");
     next();
});

app.use('/api', tipoObjetoRouter);

mongoose.connect(config.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>{
    console.log("MongoDB successfully connected!");

    app.listen(process.env.port || config.port, () => console.log(
        "Application is running under port " + config.port));

}).catch((err) => {
    console.log("Error connecting with MongoDB :-(");
})
