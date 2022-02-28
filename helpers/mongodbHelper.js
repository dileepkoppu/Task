const appRoot = require('app-root-path');
const mongoose = require('mongoose')

database=(url)=>{
    mongoose.connect(url,{useNewUrlParser :true,useUnifiedTopology: true});
    mongoose.connection
      .once('open',() => {
            console.log('connected')
      })
      .on('error', error=>
            {console.log("your error", error);});
}

module.exports.database = database