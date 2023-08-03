require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require("dns");
const urlparser = require("url");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortId = require('shortid');

/* Connect to MongooseDB*/

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

/* Create Schema */
const Schema = mongoose.Schema;
const urlSchema = new Schema({
  original_url: String,
  short_url: String
})
const URL = mongoose.model("URL", urlSchema);

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use(express.json());

app.post('/api/shorturl', async function (req, res) {
	
  const url = req.body.url
  const urlShort = shortId.generate()

  
  dns.lookup(urlparser.parse(req.body.url).hostname, function(error, address){
    if(!address){
       console.log(error)
       res.json({error: "invalid url"}) 
       return
    }
  })

  let findOne = await URL.findOne({
     original_url: url
   })

   if (findOne) {
     res.json({
     original_url: findOne.original_url,
     short_url: findOne.short_url
   })

   } else {

      findOne = new URL({
       original_url: url,
       short_url: urlShort
      })
      await findOne.save()
       res.json({
       original_url: findOne.original_url,
       short_url: findOne.short_url
      })
    }
    
})

app.get('/api/shorturl/:short_url?', async function (req, res) {

 const urlRed = await URL.findOne({
    short_url: req.params.short_url
  })

  return res.redirect(urlRed.original_url)
})


// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

