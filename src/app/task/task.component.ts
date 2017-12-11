import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() public click: boolean;
  @Input() task: any;
  constructor() { }

  ngOnInit() {
  }

  clicked(task: any): void {
    console.log(this.click);
    if (this.click) {
      this.task = task;
    }
    console.log('task clicked ' + task.id);
  }
  hideDesc() {
    console.log(this.click);
  }
}
