import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  get articles$() {
    return of<Article[]>([
      { title: "Title1", body: "This is body 1", slug: 'title-1' },
      { title: "Title2", body: "This is body 2", slug: 'title-2' },
    ])
  }

  getArticle(slug: string): Observable<Article> {
    return this.articles$.pipe(map(articles => articles.find(ar => ar.slug == slug)));
  }
}
