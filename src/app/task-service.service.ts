import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Task} from '../Task';

@Injectable()
export class TaskServiceService {

  private getUrl = 'http://localhost:3000/api/tasks';
  private postUrl = 'http://localhost:3000/api/task';
  private putUrl = 'http://localhost:3000/api/task';
  private deleteUrl = 'http://localhost:3000/api/task';

  constructor(private http: HttpClient) {}

  getTasks(): any {
    return this.http.get<Task[]>(this.getUrl);
  }

  addTask(task: Task): any {
    return this.http.post<Task[]>(this.postUrl, task);
  }

  updateTask(task: Task): any {
    console.log(task);
    return this.http.put<Task[]>(this.putUrl + "/" + task.id, task);
  }
  deleteTask(task: Task): any {
    return this.http.delete<Task[]>(this.deleteUrl + "/" + task.id);
  }
}
