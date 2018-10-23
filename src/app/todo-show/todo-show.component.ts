

import { Component, OnInit } from '@angular/core';
import {TaskdataService} from '../taskdata.service'

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent implements OnInit {
  constructor(public data: TaskdataService) { }

  ngOnInit() {
  }

  public getData(){
    return this.data.getTaskList();
  }

  public removeTask(taskId:number){
    this.data.removeTask(taskId);
  }
  public taskIsCompleted(index:number){
    this.getData()[index].taskCompleted = true;
  }
}





