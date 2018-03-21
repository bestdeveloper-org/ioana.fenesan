import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../category-list/category";

@Component({
  selector: 'app-categoy-item',
  templateUrl: './categoy-item.component.html',
  styleUrls: ['./categoy-item.component.css']
})
export class CategoyItemComponent implements OnInit {
  @Input() category:Category;
  @Output() notifyStartEdit: EventEmitter<Category> = new EventEmitter<Category>();

  person = {
    age: 1,
    name: ''
  };

  constructor() { }

  ngOnInit() {
  }
  maresteVarsta(){
    this.person.age ++;
}
  StartEditCategory(){
    this.notifyStartEdit.emit(this.category);
  }
}
