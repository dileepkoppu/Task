import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

interface CreateUpadeInterface{
  success:boolean,
  message:string
}

interface TasklistInterface{
  success:boolean,
  data:[{_id:string,
  Title:string,
  Description:string,
  Status:string
  }[]]
}


interface GetDetailsInterface{
  success:boolean,
  data:{
    Status:string
  }
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  createTask(data:object):Observable<CreateUpadeInterface>{
    return this.http.post<CreateUpadeInterface>(`create-task`,data,{headers: new HttpHeaders({ 'Content-Type': 'application/json', }),responseType:'json'})
                                        .pipe(map(data=>data),
                                        catchError((error)=>throwError(error)))
     
  }


  taskList():Observable<TasklistInterface>{
    return this.http.get<TasklistInterface>(`task-list`,{headers: new HttpHeaders({ 'Content-Type': 'application/json', }),responseType:'json'})
                              .pipe(map(data=>data),
                              catchError((error)=>throwError(error)))
  }


  Getdetailoftask(id:string):Observable<GetDetailsInterface>{
    return this.http.get<GetDetailsInterface>(`getdetailoftask/${id}`,{headers: new HttpHeaders({ 'Content-Type': 'application/json', }),responseType:'json'})
                              .pipe(map(data=>data),
                              catchError((error)=>throwError(error)))

  }

  updateTask(data:object,id:string):Observable<CreateUpadeInterface>{
    return this.http.put<CreateUpadeInterface>(`update-task/${id}`,data,{headers: new HttpHeaders({ 'Content-Type': 'application/json', }),responseType:'json'})
                                        .pipe(map(data=>data),
                                        catchError((error)=>throwError(error)))
  }

  createSubTask(data:object,id:string):Observable<CreateUpadeInterface>{
    return this.http.post<CreateUpadeInterface>(`${id}/create-sub-task`,data,{headers: new HttpHeaders({ 'Content-Type': 'application/json', }),responseType:'json'})
                                          .pipe(map(data=>data),
                                          catchError((error)=>throwError(error)))
  }


  subtaskList(id:string):Observable<TasklistInterface>{
    return this.http.get<TasklistInterface>(`${id}`,{headers: new HttpHeaders({ 'Content-Type': 'application/json', }),responseType:'json'})
                                .pipe(map(data=>data),
                                catchError((error)=>throwError(error)))
  }

  updateSubTask(data:object,id:string,subTasKIndex:string):Observable<CreateUpadeInterface>{
    return this.http.put<CreateUpadeInterface>(`${id}/update-sub-task/${subTasKIndex}`,data,{headers: new HttpHeaders({ 'Content-Type': 'application/json', }),responseType:'json'})
                                              .pipe(map(data=>data),
                                              catchError((error)=>throwError(error)))
  }
  GetdetailofSubtask(id:string,subTasKIndex:string):Observable<GetDetailsInterface>{
  return this.http.get<GetDetailsInterface>(`${id}/getdetailofsubtask/${subTasKIndex}`,{headers: new HttpHeaders({ 'Content-Type': 'application/json', }),responseType:'json'})
                                                .pipe(map(data=>data),
                                                catchError((error)=>throwError(error)))
  }

}
