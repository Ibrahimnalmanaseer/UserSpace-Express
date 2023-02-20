'use strict';
const Selectors = require('./data')
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

const mongoose = require('mongoose');
const { text } = require('express');
app.use(express.json());


const fs = require('fs');
const data = fs.readFileSync('data.json');
const jsonData = JSON.parse(data);

mongoose.connect(process.env.MONGOCLOUD,{useNewUrlParser: true, useUnifiedTopology: true});

const SelectorsSchema = new mongoose.Schema({
  
  category:String,
  subcategories:[String]
});


const Selector=mongoose.model('Selector',SelectorsSchema)



const UserInfoSchema = new mongoose.Schema({
  
  Email:String,
  Name:String,
  Sector:String,
  AgreeToTerms:Boolean
});


const UserInfo=mongoose.model('UserInfo',UserInfoSchema)
module.exports = {
  Selector: Selector,
  UserInfo: UserInfo
};




// async function seedData(){

//     for (const selector of jsonData){

//       const categoryItem= new Selector({ category:selector.category,
//       subcategories: selector.subcategories
//     });
      
//     await categoryItem.save();
   

    
//   }

 
// }


// seedData();




//Routes :

const homeRouteHandler = require("./routes/homeRouteHandler");
const addDataHandler = require("./routes/addDataRouteHandler"); 
const updateInfoRouteHandler = require("./routes/updateInfoRouteHandler");

app.get("/", homeRouteHandler);
app.post("/userinfo",addDataHandler)
app.put("/updateinfo", updateInfoRouteHandler);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})