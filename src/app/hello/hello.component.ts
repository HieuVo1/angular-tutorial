import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("Hello destroy");
  }

  ngOnInit(): void {
    console.log("Hello init");
  }

}
