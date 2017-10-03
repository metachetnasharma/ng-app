import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../books/book';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

    constructor(
      private bookService: BookService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.bookService.getBook(+params.get('id')))
        .subscribe(book => this.book = book);
    }
    goBack(): void {
      this.location.back();
    }
}
