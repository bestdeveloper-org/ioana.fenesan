import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import {Category} from "./category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    category: Category = null;
    selectedCategory: Category = null;

    categoryList: Array<Category> = [];
    message = "";


   constructor() { }

  ngOnInit() {

  }

  showAddCategoryScreen()
  {

     this.category = new Category();
  }

  add(){
      const existentCategory = this.categoryList.find(it=>it.name === this.category.name);
      if(existentCategory){
        this.message = "Category exists";
        return;
      }
      this.message = "";

      if(this.category == null)
      {
        return;
      }
      this.category.id = UUID.UUID();
      this.categoryList.push(this.category);
      this.category = null;
  }

  StartEditCategory(categoryItem){
     this.selectedCategory = {...categoryItem};

  }
  saveSelectedCategory(){
     let category = this.categoryList.find(it=>it.id === this.selectedCategory.id);
    category = {...category, name: this.selectedCategory.name};

    const categoryIndex = this.categoryList.findIndex(it=>it.id === this.selectedCategory.id);
    this.categoryList[categoryIndex] = category;


     this.selectedCategory = null;
  }

}
