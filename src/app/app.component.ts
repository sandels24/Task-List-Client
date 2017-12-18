import {Component, OnInit} from '@angular/core';
import {TaskServiceService} from './task-service.service';
import {Task} from '../Task';
import preventExtensions = Reflect.preventExtensions;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Task List Application';
  clicked: boolean;
  clickedTask: Task;
  tasks: Task[];
  emptyTaskName: string;

  constructor(public taskService: TaskServiceService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  // Adding a task into the task array
  addTask(input: string, desc: string): void {
    if (input !== '') {
      this.emptyTaskName = '';
      const task: Task = {
        'id': 1 + this.tasks[this.tasks.length - 1].id,
        'name': input,
        'description': desc
      };
      this.taskService.addTask(task).subscribe(data => {
        this.tasks = data;
      });
    } else {
      this.emptyTaskName = 'please enter a task';
    }
  }

  // Deleting a task from the tasks array
  updateTask(task: any, name: string, desc: string): void {
    const newTask = {
      'id': task.id,
      'name': name,
      'description': desc
    };
    this.taskService.updateTask(newTask).subscribe(data => {
      this.tasks = data;
    });
  }

  // Deleting a task from the tasks array
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(data => {
      this.tasks = data;
    });
  }

  // Clicking the Task
  taskClicked(task: any): void {
    this.clicked = true;
    this.clickedTask = task;
  }

  closeDesc(event) {
    this.clicked = event;
  }
}
