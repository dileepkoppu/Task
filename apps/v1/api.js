const appRoot=require('app-root-path');
const {Task,SubTask} = require(appRoot+'/models');


const CreateTask= async(req,res)=>{
    try {
        const data=req.body;
        data['Status']="In Progress";
        data['created_at']=Date();
        const newTask=new Task(data);
        newTask.save()
                    .then((data1)=>{
                        res.status(201).json({success:true,message:"Task created"});
                    })
                    .catch((error)=>{
                        res.status(400).json({success:false,"message":"something went wrong please try again"});
                    })
    } catch (error) {
        res.status(400).json({success:false,"message":"something went wrong please try again"});
    }
};

const TaskList =async(req,res)=>{
    try {
        await Task.find()
                 .then((data)=>{
                     //filter
                    const data1 = data.filter((d)=>d.Status==="In Progress")
                    let data2 =  data.filter((d)=>d.Status==="Completed")
                    if (data2.length>10) {
                        data2=data2.splice(0,11)
                    }
                    const data3 = data.filter((d)=>d.Status==="Archive")
                    res.status(200).send({success:true,data:[data1,data2,data3]});
                 })
                 .catch((error)=>{
                    res.status(400).json({success:false,"message":"something went wrong please try again"});
                })
    } catch (error) {    
        res.status(400).json({success:false,"message":"something went wrong please try again"});
    }
}

const UpdateTask= async(req,res)=>{
    try {
        const id = req.params.id;
        Task.updateOne({"_id":id},{$set:{'Status':req.body.Status}})
                                            .then((data)=>{
                                                if (data.modifiedCount) {
                                                    res.status(202).json({success:true,"message":"Task successfully updated"});
                                                } else {
                                                    res.status(200).json({success:false,"message":"Task not updated please try again"});
                                                }
                                            })
                                            .catch((error)=>{
                                                res.status(400).json({success:false,"message":"something when wrong please try again"});
                                            })
        
    } catch (error) {
        res.status(400).json({success:false,"message":"something went wrong please try again"});
        
    }
}



const Getdetailoftask = async(req,res)=>{
    try{
        const id = req.params.id;
        Task.findOne({_id:id},{Status:1,_id:0})
                            .then((data)=>{
                                if (data) {
                                    res.status(202).json({success:true,data:data});
                                } else {
                                    res.status(400).json({success:false,"message":"Task not found"});
                                }
                            })
                            .catch((error)=>{
                                res.status(400).json({success:false,"message":"some thing when wrong try again"});
                            })
    } catch (error) {
        res.status(400).json({success:false,"message":"something went wrong please try again"});
    }    
}


const CreateSubTask= async(req,res)=>{
    try {
        const id = req.params.id;
        const data=req.body;
        data['Status']="In Progress";
        data['created_at']=Date();
        data['TaskId']=id;
        const newSubTask=SubTask(data);
        newSubTask.save()
                    .then((data)=>{
                        res.status(201).json({success:true,message:"Sub-Task created"});
                    })
                    .catch((error)=>{
                        res.status(400).json({success:false,"message":"something went wrong please try again"});
                    })
    } catch (error) {
        res.status(400).json({success:false,"message":"something went wrong please try again"});
    }
};

const subTasKList= async(req,res)=>{
    try {
        const id=req.params.id;
        SubTask.find({TaskId:id})
                                .then((data)=>{                    
                                    const data1 = data.filter((d)=>d.Status==="In Progress")
                                    const data2 =  data.filter((d)=>d.Status==="Completed")
                                    if (data2.length>10) {
                                        data2=data2.splice(0,11)
                                    }
                                    const data3 = data.filter((d)=>d.Status==="Archive")
                                    res.status(200).json({success:true,data:[data1,data2,data3]});
                                })
                                .catch((error)=>{
                                    res.status(400).json({success:false,"message":"something went wrong please try again"});
                                })
    } catch (error) {
        res.status(400).json({success:false,"message":"something went wrong please try again"});
    }
}

const UpdateSubTask=async(req,res)=>{
    try {
        const id = req.params.id;
        const subTasKIndex=req.params.subTasKIndex;
        const info=await SubTask.updateOne({_id:subTasKIndex},{$set:{Status:req.body.Status}})
        if (info.modifiedCount) {
            const len1=await SubTask.find({TaskId:id,$or: [ { Status: "Archive" }, { Status: "In Progress" } ]}).countDocuments()
            if (len1===0) {
                Task.updateOne({_id:id},{$set:{Status:"Completed"}})
                                .then((data)=>{
                                    res.status(202).json({success:true,"message":"SubTask successfully updated"});
                                })
                                .catch((error)=>{
                                    res.status(400).json({success:false,"message":"something when wrong please try again"});
                                })
            }else{
                res.status(202).json({success:true,"message":"Task successfully updated"});
            }
        } else {
            res.status(200).json({success:false,"message":"Task not updated please try again"});
        }
    } catch (error) {
        res.status(400).json({success:false,"message":"something went wrong please try again"})
        
    }
}

const GetdetailofSubtask = async(req,res)=>{
    try{
        const subTasKIndex = req.params.subTasKIndex
        SubTask.findOne({_id:subTasKIndex},{Status:1,_id:0})
                            .then((data)=>{
                                if (data) {
                                    res.status(202).json({success:true,data:data})
                                } else {
                                    res.status(400).json({success:false,"message":"Task not found"})
                                }
                            })
                            .catch((error)=>{
                               
                                res.status(400).json({success:false,"message":"some thing when wrong try again"})
                            })
    } catch (error) {
        res.status(400).json({success:false,"message":"something went wrong please try again"})
    }    
}


module.exports.CreateTask=CreateTask
module.exports.TaskList=TaskList
module.exports.UpdateTask=UpdateTask
module.exports.Getdetailoftask=Getdetailoftask
module.exports.CreateSubTask=CreateSubTask
module.exports.subTasKList=subTasKList
module.exports.UpdateSubTask=UpdateSubTask
module.exports.GetdetailofSubtask=GetdetailofSubtask