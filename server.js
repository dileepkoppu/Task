const appRoot=require('app-root-path');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')

const app=express();

const router=require(appRoot+'/router')

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:true}))
require('dotenv').config()

const uri = process.env.DB_URL||'mongodb://localhost/Task'

// db
// ----------------------------------------------------------------------

require(appRoot+"/helpers/mongodbHelper.js").database(uri)


// ---------------------------------------------------


app.use('',express.static(appRoot+"/static"))

app.use('',router.router)

app.listen(process.env.PORT||9000,()=>{console.log('server started');})
