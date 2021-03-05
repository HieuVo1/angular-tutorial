import { ArticleListComponent } from './article-list/article-list.component';
import { Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
export const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: ':slug',
    component: ArticleDetailComponent
  }

];
