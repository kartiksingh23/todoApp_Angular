import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  taskList:any[]
  constructor() {
    this.taskList=[]
   }

   public addTask(description:String){
     this.taskList.push({
      'taskDescription':description,
      'timeStamp':new Date(),
      'taskId': this.taskList.length + 1,
      'taskCompleted': false
     })
   }

   public getTaskList(){
     return this.taskList;
   }

   public removeTask(taskId:number){
     this.taskList=this.taskList.filter(task=>task.taskId!=taskId)
   }

}