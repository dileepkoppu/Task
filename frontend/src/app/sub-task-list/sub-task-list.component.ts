import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TaskService } from "../task.service";


interface subtasklist{
  _id:string
  Title:string,
  Description:string,
  Status:string,
  // TaskId:string
}

@Component({
  selector: 'app-sub-task-list',
  templateUrl: './sub-task-list.component.html',
  styleUrls: ['./sub-task-list.component.css']
})
export class SubTaskListComponent implements OnInit {
  data1:Array<subtasklist[]>=[]
  id:string=this.activatedRoute.snapshot.params['id']

  constructor(
    private Task:TaskService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Task.subtaskList(this.activatedRoute.snapshot.params['id'])
                                    .subscribe((data)=>{
                                      this.data1=data.data;                
                                    })
  }

}
