const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose");


app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use(express.urlencoded({extended: false}))
app.use(express.json())


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

//--------------------------------------------//

mongoose.connect(process.env.MONGO_URI,{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
  });


const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  
})

const exerciseSchema = new Schema({
  username: String,
  description: String,
  duration: Number,
  date: Date,
 
})

const logSchema = new Schema({
  username: String,
  count: Number,
  log: Array,
 
})

let User = mongoose.model("user", userSchema);
let Exercise = mongoose.model("exercise", exerciseSchema);
let Log = mongoose.model("log", logSchema);

app.post("/api/users", (req, res) => {
  User.find({"username": req.body.username}, (err, userData) => {
  
    if (userData.length == 0){
      let newUsr = new User({
       "_id": req.body.id,
        "username": req.body.username
        })
    
      newUsr.save((err, data) => {
        res.json({
         "_id": data.id,
         "username": data.username,
          })
        })
      }
    })
  })

app.get("/api/users", (req, res) =>{
    User.find({}, (err, data) =>{
      res.json(data)
    })
  })


app.get("/api/users/:_id/logs", (req, res) =>{
  const { from, to, limit} = req.query;
  let id = {"id": req.params._id};
  id = id.id
    
  User.findById(id, (err, data) =>{
    var query = {
      username: data.username
      }
    
    if(to !== undefined && from == undefined) {
      query.date = {$gte: new Date(from)}     
    } else if (from !== undefined && to == undefined) {
      query.date = {$lte: new Date(to)}
    } else if (from !== undefined && to !== undefined) {
      query.date = { $gte: new Date(from), $lte: new Date(to)}
    }
    
    let limitcheck = (limit) => {
      let max = 500
      if(limit){
        return limit
      } else  {
        return max
      }
    }

    Exercise.find((query), null, ({limit: limitcheck(+limit)}), (err, data) =>{
      let documents = data;
      let logArray = documents.map((item) =>{
        return{
          "description": item.description,
          "duration": item.duration,
          "date": item.date.toDateString()
        }
      })
      

      const log = new Log({
        "username": data.username,
        "count": logArray.length,
        "log": logArray,
      })
      
      log.save((err, data) =>  {
        res.json({
         "_id": id,
         "username": data.username,
         "count": data.count,
         "log": logArray
        })
      }) 

     })
   })
})


app.post("/api/users/:_id/exercises", (req, res) =>{
  let id = {"id": req.params._id};
  id = id.id
  let checkDate = new Date(req.body.date);
  
  let noDateHandler = () =>{
    if (checkDate instanceof Date && !isNaN(checkDate)) {
      return checkDate  
    } else {
      checkDate = new Date();
    }
  }

  User.findById(id, (err, data) => {
    noDateHandler(checkDate);

    const newEx = new Exercise({
      "username": data.username,
      "description": req.body.description,
      "duration": req.body.duration,
      "date": checkDate.toDateString(),
    })

    newEx.save((err, data) =>{
      res.json({
        "_id": id,
        "username": data.username,
        "description": data.description,
        "duration": data.duration,
        "date": data.date.toDateString(),
      })
    })

  })
})
