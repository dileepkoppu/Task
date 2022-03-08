import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from "../task.service";

interface tasklist{
  _id:string,
  Title:string,
  Description:string,
  Status:string
}



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  data1:Array<tasklist[]>=[]

  constructor(
    private Task:TaskService
  ) { }

  ngOnInit(): void {
    this.Task.taskList()
              .subscribe((data)=>{
                this.data1=data.data                
              })
  }

}



