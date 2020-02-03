import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../shared/task.model';
import { map, takeLast} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  
  fetchTasks(){
    return this.http.get('http://localhost:8000/api/task');
  }
  postTask(title: string){
    const postData = {title}
    return this.http.post<Task>(
      'http://localhost:8000/api/task',
      postData
    );
   
  }
  updateTask(id: string, title: string, isDone: boolean){
    const postData = {id: id, title:title, isDone: isDone}
    const updateUrl = `http://localhost:8000/api/task/${id}`
    this.http.patch(updateUrl,
    postData
  )
  .subscribe();
  }
  deleteTask(id: string){
    const deleteUrl = `http://localhost:8000/api/task/${id}`
    return this.http.delete(deleteUrl);
  }
}
