import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CrudServiceService } from '../crud-service.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  checkIcon = faCheck;
  timesIcon = faTimes;
  trashIcon = faTrash;

  Todos: Observable<any[]>;
  allProducts:any[];
  // todos: Todo[] = [
  //   { todoName: 'Ev Temizlenecek', isComplete: true },
  //   { todoName: 'Bisiklete binilecek', isComplete: false },
  //   { todoName: 'Yemek Yenilecek', isComplete: false },
  //   { todoName: 'Kitap Okunacak', isComplete: false },
  // ];
  constructor(private crudService: CrudServiceService) {}

  ngOnInit(): void {
    this.crudService.getTodos()
    .subscribe(res => this.allProducts = res);
    console.log(JSON.stringify(this.allProducts));
  }

  updateComplete(todo){
    this.crudService.updateTodo(todo)
  }

  deleteTODO(todo){
    this.crudService.deleteTodo(todo);
  }
}
