import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate = new Date();

  user = {
    name: "Hieu",
    age: 30
  }


  interval$ = interval(1000);

  //AddressLike
  addr = {
    city: "HCM",
    country: "US",
    state: "HOAI NHON",
    address: "KTX Khu B"
  };

  formatAddress() {
    this.addr.address = "changed";
  }

  users = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];

  addUser() {
    this.users.push({ name: '123', age: 20 });
  }
}
