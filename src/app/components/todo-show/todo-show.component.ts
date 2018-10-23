

import { Component, OnInit } from '@angular/core';
import {TaskdataService} from '../../services/taskdata.service'

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent implements OnInit {
  constructor(public data: TaskdataService) { }

  ngOnInit() {
  }

  public getData(){ //get list of all the tasks
    return this.data.getTaskList();
  }

  public removeTask(taskId:number){ //remove the task having a certain taskid 
    this.data.removeTask(taskId);
  }
  public taskIsCompleted(index:number){ //if task is completed it sets the value of the property 'taskCompleted' to true
    this.getData()[index].taskCompleted = true;
  }
}





