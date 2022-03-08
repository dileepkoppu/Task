import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TaskService } from "../task.service";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  
  CreateTaskForm=new FormGroup({
    Title:new FormControl('',Validators.minLength(3)),
    Description:new FormControl('',Validators.minLength(3))
  })

  constructor(
    private TaskService:TaskService,
    private router:Router
  ) { }

  ngOnInit(): void {
   
    
  }

  onsubmit(){
    this.TaskService.createTask(this.CreateTaskForm.value)
                                .subscribe(
                                  (data)=>{
                                  this.router.navigate([''])
                                })
  }

}
