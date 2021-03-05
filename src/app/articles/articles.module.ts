import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { articlesRoutes } from './articles.routes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(articlesRoutes)
  ]
})
export class ArticlesModule { }
