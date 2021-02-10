import { Component, OnInit } from '@angular/core';
let count = 1;
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = count++;
  constructor() { }

  ngOnInit(): void {
  }

}
