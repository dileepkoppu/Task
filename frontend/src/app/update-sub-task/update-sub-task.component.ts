import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { TaskService } from "../task.service";

@Component({
  selector: 'app-update-sub-task',
  templateUrl: './update-sub-task.component.html',
  styleUrls: ['./update-sub-task.component.css']
})
export class UpdateSubTaskComponent implements OnInit {



  UpdateSubTaskFrom=new FormGroup({
    Status:new FormControl('',Validators.required)
  })

  constructor(
    private TaskService:TaskService,
    private ActivatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.TaskService.GetdetailofSubtask(this.ActivatedRoute.snapshot.params['id'],this.ActivatedRoute.snapshot.params['subTasKIndex'])
    .subscribe((data)=>{
      this.UpdateSubTaskFrom.patchValue(data.data)

      
    })
  }

  onsubmit(){
    const id=this.ActivatedRoute.snapshot.params['id']
    const SubTaskId=this.ActivatedRoute.snapshot.params['subTasKIndex']
    this.TaskService.updateSubTask(this.UpdateSubTaskFrom.value,id,SubTaskId)
                                                                .subscribe((data)=>{
                                                                  this.router.navigate(['/',id])
                                                          })
  }

}
