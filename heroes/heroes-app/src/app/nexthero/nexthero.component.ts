import { Component, OnInit } from '@angular/core';
import { Nexthero } from './nexthero';

@Component({
  selector: 'app-nexthero',
  templateUrl: './nexthero.component.html',
  styleUrls: ['./nexthero.component.css']
})
export class NextheroComponent implements OnInit {

  // nexthero='Batman';

  nexthero: Nexthero = {
    name: "Popescu",
    age: 10
};



  constructor() { }

  ngOnInit() {
  }

}
