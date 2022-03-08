import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { TaskService } from "../task.service";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  updateTaskFrom=new FormGroup({
    Status:new FormControl('',Validators.required)
  })

  constructor(
    private TaskService:TaskService,
    private ActivatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.TaskService.Getdetailoftask(this.ActivatedRoute.snapshot.params['id'])
                                  .subscribe((data)=>{
                                    this.updateTaskFrom.patchValue(data.data)
                                  })
  }

  onsubmit(){
    this.TaskService.updateTask(this.updateTaskFrom.value,this.ActivatedRoute.snapshot.params['id'])
                                                                .subscribe((data)=>{
                                                                  this.router.navigate([''])
                                                                })
  }

}
