import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  taskName='';
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  keyboardFunction(event){
    if((event.keyCode == 13 || event.keyCode == 9) && this.taskName !== ""){
      this.taskService.postTask(this.taskName).subscribe(task => {
        this.addEvent.emit({title: this.taskName, id: task.id, isDone: task.isDone});
      });
  }}

}
