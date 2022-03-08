import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { CreateSubTaskComponent } from './create-sub-task/create-sub-task.component';
import { SubTaskListComponent } from './sub-task-list/sub-task-list.component';
import { UpdateSubTaskComponent } from './update-sub-task/update-sub-task.component';

const routes: Routes = [
  {path:"",component:TaskListComponent},
  {path:"CreateTask",component:CreateTaskComponent},
  {path:"UpdateTask/:id",component:UpdateTaskComponent},
  {path:":id/CreateSubTask",component:CreateSubTaskComponent},
  {path:":id",component:SubTaskListComponent},
  {path:":id/UpdateSubTask/:subTasKIndex",component:UpdateSubTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
