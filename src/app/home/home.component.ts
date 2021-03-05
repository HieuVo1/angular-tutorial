import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/articles';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
