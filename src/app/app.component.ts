import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age: number = 15;
  // Data Down: parent component tuong tac voi child component
  //Event Up: child component tuong tac voi child component
}
