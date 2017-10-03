import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;
  searchText: string = "";
  constructor(private router: Router, private bookService: BookService, private data: DataService) { }



  ngOnInit(): void {
    this.bookService.getBooks()
      .then(books => this.books = books);
  }


 gotoDetail(book: Book): void {
   this.selectedBook = book;
   console.log(this.selectedBook.id);
   this.router.navigate(['/detail', this.selectedBook.id]);
 }
}
