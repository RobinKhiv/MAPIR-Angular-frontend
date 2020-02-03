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
  addTask(id){
    const copy = this.tasks;
    copy.filter(el => el.id !== id);
    this.tasks = copy;
  }
  update(){
    this.taskService.fetchTasks().subscribe(task => this.tasks= task)
  }
}
