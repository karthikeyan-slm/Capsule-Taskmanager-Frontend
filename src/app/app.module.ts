import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTableModule} from "angular-6-datatable";


import {HttpClientModule} from '@angular/common/http';
import { ViewTaskComponent } from './view-task/view-task.component';



@NgModule({
  declarations: [
    AppComponent,
   
   routingComponents,
   ViewTaskComponent,
   
  
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
