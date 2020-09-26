import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() toggleForm: EventEmitter<any> = new EventEmitter;
@Input() isShow; 
  plusIcon = faPlus;
  minusIcon = faMinus;
  constructor() { }

  ngOnInit(): void {
    
  }

  toggleFunction(){
    this.toggleForm.emit({isData:!this.isShow})
  }

}
