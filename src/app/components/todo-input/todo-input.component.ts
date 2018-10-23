import { Component, OnInit } from '@angular/core';
import {TaskdataService} from '../../services/taskdata.service'

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public taskDescription: String;

  constructor(public data:TaskdataService) { }

  ngOnInit() {
  }

  public addTask(){
    this.data.addTask(this.taskDescription);
    this.taskDescription='';
  }

}

