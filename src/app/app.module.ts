import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TaskServiceService} from './task-service.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
