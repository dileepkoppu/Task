const appRoot=require('app-root-path');
const express=require('express');

const router=express.Router()
const {
    CreateTask,
    TaskList,
    UpdateTask,
    Getdetailoftask,
    CreateSubTask,
    subTasKList,
    UpdateSubTask,
    GetdetailofSubtask
}=require(appRoot+'/apps/v1/api.js')


router.post('/create-task',CreateTask);
router.get('/task-list',TaskList);
router.get('/Getdetailoftask/:id',Getdetailoftask);
router.put('/update-task/:id',UpdateTask);

router.post('/:id/create-sub-task',CreateSubTask);
router.get('/:id',subTasKList);
router.put('/:id/update-sub-task/:subTasKIndex',UpdateSubTask);
router.get('/:id/getdetailofSubtask/:subTasKIndex',GetdetailofSubtask);

module.exports.router = router