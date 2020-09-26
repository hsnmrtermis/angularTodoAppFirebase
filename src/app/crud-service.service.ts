import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

constructor(public fireservices: AngularFirestore) { }

create_NewTodos(Record){
  return this.fireservices.collection('Todos').add(Record);
}

getTodos(){
  return this.fireservices.collection('Todos').snapshotChanges();
}

updateTodo(todo){

  var myTodo = todo.payload.doc.data();
  var myCompleteState = myTodo.isComplete;

  return this.fireservices
  .collection('Todos')
  .doc(todo.payload.doc.id)
  .set({isComplete: !myCompleteState} , {merge: true});
}

deleteTodo(todo){
  return this.fireservices
  .collection('Todos')
  .doc(todo.payload.doc.id)
  .delete();
}

}