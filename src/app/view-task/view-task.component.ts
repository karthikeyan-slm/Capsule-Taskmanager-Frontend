import { Component, OnInit } from '@angular/core';
import {task} from '../add-task/add-task.model';
import {AddTaskComponent} from '../add-task/add-task.component'
import { FormBuilder,Validators} from '@angular/forms';
import { AddTaskService } from '../add-task/add-task.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  disableButton;
  isDisabled: boolean;
  tasks: task[];
  taskModel
  searchModel;
  filterdata=[]

  example = {taskId:null,task: null, priority: null, parentTask: null,startDate: null,endDate:null };

    constructor( private fb: FormBuilder,private _addTaskService: AddTaskService,private _router: Router) {
        
    }
    addTaskForm = this.fb.group({
      taskId: [],
      task: ['', Validators.required],
      priority: ['', Validators.required],
      parentTask: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    ngOnInit() {
       this._addTaskService.getTask()
         .subscribe( data => {
           this.tasks =this.searchModel= data;
         });
    };
  

  // editButtonClick(taskId: number) {
  //   this._router.navigate(['/task', taskId])
  // }
  
click(task){
  console.log("hello");
  console.log(task.isDisabled);
  task.isDisabled=true;
  console.log(task.isDisabled);
 }

 closeEdit()
 {
  console.log("End Task");
  this.ngOnInit();
 }

  updateTask(task){
    console.log("hi");
    this.taskModel =task;
    
    
     this.example = {taskId:this.taskModel.taskId,task: this.taskModel.task, priority: this.taskModel.priority, parentTask: this.taskModel.parentTask,startDate: this.taskModel.startDate,endDate:this.taskModel.endDate };
    
  }
  

  onSubmit() {
    console.log(this.addTaskForm.value);
    this._addTaskService.addTask(this.addTaskForm.value)
      .subscribe(
      response => console.log('success', response),
      error => console.error('Error!', error)
      );
  }
  searchTask(term: string) {
    if(!term) {
      this.tasks = this.searchModel;
    } else {
      this.tasks = this.tasks.filter(x => 
         x.task.trim().toLowerCase().includes(term.trim().toLowerCase()) 
        
      );
    }
  }
  searchParentTask(term: string) {
    if(!term) {
      this.tasks = this.searchModel;
    } else {
      this.tasks = this.tasks.filter(x => 
         x.parentTask.trim().toLowerCase().includes(term.trim().toLowerCase()) 
        
      );
    }
  }
  searchPriorityFrom(term1: number) {
    console.log (term1)
    if(!term1 ) {
      this.tasks = this.searchModel;
    } else {
      this.tasks = this.tasks.filter(x => 
       // x.task.trim().toLowerCase().includes(term1.trim().toLowerCase()) 
       x.priority.toString().trim().toLowerCase().includes(term1.toString().trim().toLowerCase())
        //   x.priority.toString().includes(term22.toString()) ||         
        //   x.parentTask.trim().toLowerCase().includes(term3.trim().toLowerCase()) ||
        //   x.startDate.toString().includes(term4.toString()) ||
        //   x.endDate.toString().includes(Term5.toString()) 
          
      );
    }
  }


  searchPriorityTo(term1: number) {
    console.log (term1)
    if(!term1 ) {
      this.tasks = this.searchModel;
    } else {
      this.tasks = this.tasks.filter(x => 
       // x.task.trim().toLowerCase().includes(term1.trim().toLowerCase()) 
       x.priority.toString().trim().toLowerCase().includes(term1.toString().trim().toLowerCase())
        //   x.priority.toString().includes(term22.toString()) ||         
        //   x.parentTask.trim().toLowerCase().includes(term3.trim().toLowerCase()) ||
        //   x.startDate.toString().includes(term4.toString()) ||
        //   x.endDate.toString().includes(Term5.toString()) 
          
      );
    }
  }

  // searchStartDate(term1: number) {
  //   console.log (term1)
  //   if(!term1 ) {
  //     this.tasks = this.searchModel;
  //   } else {
  //     this.tasks = this.tasks.filter(x => 
  //      // x.task.trim().toLowerCase().includes(term1.trim().toLowerCase()) 
  //      x.startDate.toString().trim().toLowerCase().includes(term1.toString().trim().toLowerCase())
  //       //   x.priority.toString().includes(term22.toString()) ||         
  //       //   x.parentTask.trim().toLowerCase().includes(term3.trim().toLowerCase()) ||
  //       //   x.startDate.toString().includes(term4.toString()) ||
  //       //   x.endDate.toString().includes(Term5.toString()) 
          
  //     );
  //   }
  // }


  // searchEndDate(term1: number) {
  //   console.log (term1)
  //   if(!term1 ) {
  //     this.tasks = this.searchModel;
  //   } else {
  //     this.tasks = this.tasks.filter(x => 
  //      // x.task.trim().toLowerCase().includes(term1.trim().toLowerCase()) 
  //      x.endDate.trim().toLowerCase().includes(term1.trim().toLowerCase())
  //       //   x.priority.toString().includes(term22.toString()) ||         
  //       //   x.parentTask.trim().toLowerCase().includes(term3.trim().toLowerCase()) ||
  //       //   x.startDate.toString().includes(term4.toString()) ||
  //       //   x.endDate.toString().includes(Term5.toString()) 
          
  //     );
  //   }
  // }




}
