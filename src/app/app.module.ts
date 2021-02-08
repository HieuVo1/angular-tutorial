import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
