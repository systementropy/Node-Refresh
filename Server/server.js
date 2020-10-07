const express 		= require('express');
const MongoClient 	= require('mongodb').MongoClient;
const bodyParser	= require('body-parser');
const dbConf		= require('./config/db')
const app			= express();
const port 			= 8000;
app.use(bodyParser.urlencoded({extended : true}))

const client = new MongoClient(dbConf.url, { useNewUrlParser: true })
client.connect(err => {
  if (err) return console.log(err)
  const db = client.db(dbConf.dbName)
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log("We are live on " + port);
  });

})