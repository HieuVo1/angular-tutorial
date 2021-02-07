import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
      id: Math.random() * 10,
      value: "A"
    },
    {
      id: Math.random() * 10,
      value: "B"
    },
    {
      id: Math.random() * 10,
      value: "C"
    }
  ]

  tags = ["angular", "react", "vue"];

  Add() {
    const fakeUserList = JSON.parse(JSON.stringify(this.users));
    this.users = [
      {
        id: Math.random() * 10,
        value: "A",
      },
      ...fakeUserList
    ]
  }

  trackByID(index: number, item) {
    return item.id;
  }
}
