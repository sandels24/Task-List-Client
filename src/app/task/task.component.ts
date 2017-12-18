import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // @Input()  public clicke: boolean;
  @Input() task: any;
  @Input() click;
  @Output() closeDesc: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  hideDesc() {
    this.closeDesc.emit(false);
  }
}
