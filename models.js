const mongoose =require('mongoose')
const schema =mongoose.Schema



const TaskSchema = new schema({
    "Title":{
        type : String,
        required:true,
        minLength:3
    },
    "Description":{
        type : String,
        required:true,
        minLength:3
    },
    "Status":{
        type: String,
        enum: ['In Progress','Completed','Archive'],
        required:true
    },
    "CreatedAt": Date,
})



const SubTasKSchema= new schema({
    "Title":{
        type : String,
        required:true,
        minLength:3
    },
    "Description":{
        type : String,
        required:true,
        minLength:3
    },
    "Status":{
        type: String,
        enum: ['In Progress','Completed','Archive'],
        required:true
    },
    "TaskId":{
        type : String,
        required:true,
        index: true 
    },
    "CreatedAt": Date,
})


Task=mongoose.model('Task',TaskSchema)

SubTask=mongoose.model('SubTask',SubTasKSchema)

module.exports.Task = Task
module.exports.SubTask = SubTask