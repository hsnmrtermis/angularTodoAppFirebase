import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTodoApp';
  isShowForm: boolean = false;

  toggleFunction(data){
    this.isShowForm = data.isData;
  }
}
