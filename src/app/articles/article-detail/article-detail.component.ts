import { Observable } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, pluck, switchMap, switchMapTo, tap } from 'rxjs/operators';
import { Article } from '../../models/articles';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article$: Observable<Article>;
  constructor(private readonly route: ActivatedRoute, private readonly articleService: ArticleService) { }

  ngOnInit(): void {
    this.article$ = this.route.params.pipe(
      pluck("slug"),
      switchMap(slug => this.articleService.getArticle(slug)),
      filter(article => !!article)
    )
  }

}
