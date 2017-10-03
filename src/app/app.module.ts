import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule }        from './app-routing.module';
import { MaterialModule } from './material/material.module';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { BookService } from './books/book.service';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {DataService} from './service/data.service';
import { SearchFilterPipe } from './search-filter/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    BooksComponent,
    BookDetailComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [BookService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
