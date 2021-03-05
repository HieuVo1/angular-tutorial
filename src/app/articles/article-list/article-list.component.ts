import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private articleService: ArticleService, private readonly router: Router) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$;
  }

  OnReadMoreClick(slug: string) {
    this.router.navigate(['/articles', slug])
  }
}
