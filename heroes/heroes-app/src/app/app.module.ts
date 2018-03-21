import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import { NextheroComponent } from './nexthero/nexthero.component';
import { CategoyItemComponent } from './categoy-item/categoy-item.component';
import { CategoryListComponent } from './category-list/category-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NextheroComponent,
    CategoyItemComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
