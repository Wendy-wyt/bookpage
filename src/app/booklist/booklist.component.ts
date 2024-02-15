import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooklistService } from '../booklist-service/booklist.service';
import { Book } from '../interfaces/book.interface';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss'
})
export class BooklistComponent {
  booklist: Book[] = [];
  subscription: Subscription | undefined;

  constructor(private booklistService: BooklistService) { }

  ngOnInit() {
    this.subscription = this.booklistService.getBookList().subscribe(
      (books) => { this.booklist = [...books]; }
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
