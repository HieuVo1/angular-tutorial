import { authors, Author } from './../author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors = authors;

  currentAuthor = authors[0];

  authorSelected(data: Author) {
    this.currentAuthor = data;
  }

  deleteAuthor(id: number) {
    this.authors = this.authors.filter(author => {
      return author.id != id;
    })

    if (this.currentAuthor.id == id) {
      this.currentAuthor = this.authors[0];
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
