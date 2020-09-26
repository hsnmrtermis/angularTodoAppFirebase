import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Input() showProp;
  todoName:string;
  bosForm: boolean = false;
  formTodoName = new FormControl('',Validators.required);
  constructor(private crudService: CrudServiceService) {}

  ngOnInit(): void {}

  createRecord(){
    if(!this.todoName){
      this.bosForm = true;
     
    }else{
      let TODO = {};
    TODO['name'] = this.todoName;
    TODO['isComplete'] = false;

    this.crudService.create_NewTodos(TODO).then(res => {
      this.todoName = '';
      console.log(res);
      this.bosForm = false;
      this.formTodoName.setValue('');
    
    }).catch(error => {
      console.log(error);
    });
    }
    

  }
}
