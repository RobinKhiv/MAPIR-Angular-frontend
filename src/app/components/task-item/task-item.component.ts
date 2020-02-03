import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../shared/task.model';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteEvent = new EventEmitter();
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onCheckboxChange(){
    this.taskService.updateTask(this.task.id, this.task.title, !this.task.isDone);
  }
  
  onDelete(){
    this.taskService.deleteTask(this.task.id).subscribe(() => this.deleteEvent.emit(this.task.id));
  }
}
