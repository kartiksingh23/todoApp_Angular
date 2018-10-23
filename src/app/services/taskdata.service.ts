import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  taskList:any[]
  constructor() {
    this.taskList=[]
   }

   // a task has 4 properties  which are taskDescription, timeStamp , taskId, taskCompleted
   public addTask(description:String){ 
    this.taskList.push({
      'taskDescription':description,
      'timeStamp':new Date(),
      'taskId': this.taskList.length + 1, //task id is 1 + (the position at which the task was added to the list)
      'taskCompleted': false
     })
   }

   public getTaskList(){
     return this.taskList;
   }

   public removeTask(taskId:number){
     this.taskList=this.taskList.filter(task=>task.taskId!=taskId) //filters all the tasks which do not have task id equal to a given taskId
   }

}