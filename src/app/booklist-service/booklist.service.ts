import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book.interface';
import { Response, Item } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  private searchString = new BehaviorSubject<string>("");
  private booklist = new BehaviorSubject<Book[]>([]);
  private baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  constructor(private http: HttpClient) {
    this.searchString.pipe(
      switchMap(searchString => {
        if (searchString !== "") {
          return this.fetchBooks(searchString);
        } else {
          return new Observable<Book[]>();
        }
      })
    ).subscribe((books: Book[]) => {
      this.booklist.next(books);
    })
  }

  triggerSearch(searchString: string) {
    this.searchString.next(searchString);
  }

  getBookList() {
    return this.booklist.asObservable();
  }

  private fetchBooks(searchString: string) {
    const url = this.baseUrl + encodeURIComponent(searchString);
    return this.http.get<Response>(url).pipe(
      switchMap(({ totalItems, items }: Response) => {
        if (totalItems === 0) return of([]);
        const books = items.map(({ volumeInfo }: Item) => {
          const newBook: Book = {
            title: volumeInfo.title,
            author: volumeInfo.authors?.join(", "),
            publisher: volumeInfo.publisher,
            publishdate: volumeInfo.publishedDate,
            description: volumeInfo.description,
            imglink: volumeInfo.imageLinks?.smallThumbnail
          }
          return newBook;
        });
        return of(books);
      })
    );
  }
}
