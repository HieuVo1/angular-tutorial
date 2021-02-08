import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  @Input() author: Author;
  @Output() authorSelect = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
