import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from "@angular/forms";
import { ActivatedRoute,Router } from "@angular/router";
import { TaskService } from "../task.service";

@Component({
  selector: 'app-create-sub-task',
  templateUrl: './create-sub-task.component.html',
  styleUrls: ['./create-sub-task.component.css']
})


export class CreateSubTaskComponent implements OnInit {



  CreateSubTaskForm=new FormGroup({
    Title:new FormControl('',Validators.minLength(3)),
    Description:new FormControl('',Validators.minLength(3))
  })

  constructor(
    private TaskService:TaskService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onsubmit(){
    const id=this.activatedRoute.snapshot.params['id']
    this.TaskService.createSubTask(this.CreateSubTaskForm.value,id)
                                .subscribe( (data)=>{
                                  this.router.navigate(['/',id])
                                })
  }

}
