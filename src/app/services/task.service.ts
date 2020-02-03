import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../shared/task.model';
import { map, takeLast} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url: string = 'https://mighty-reaches-87853.herokuapp.com/api/task';
  constructor(private http: HttpClient) { }
  
  fetchTasks(){
    return this.http.get(this.url);
  }
  postTask(title: string){
    const postData = {title}
    return this.http.post<Task>(
      this.url,
      postData
    );
   
  }
  updateTask(id: string, title: string, isDone: boolean){
    const postData = {id: id, title:title, isDone: isDone}
    const updateUrl = `${this.url}/${id}`
    this.http.patch(updateUrl,
    postData
  )
  .subscribe();
  }
  deleteTask(id: string){
    const deleteUrl = `${this.url}/${id}`
    return this.http.delete(deleteUrl);
  }
}
