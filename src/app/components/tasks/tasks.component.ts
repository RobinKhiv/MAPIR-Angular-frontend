import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.taskService.fetchTasks().subscribe(task => this.tasks= task);
  }
  addTask(event){
    const newtask = {id: event.id, title: event.title, isDone: event.isDone}
    const newCopy = [...this.tasks, newtask];
    this.tasks = newCopy;
  }
  deleteTask(event){
    this.tasks = this.tasks.filter(task => task.id !== event.id);
  }
}
