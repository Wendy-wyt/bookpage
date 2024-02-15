import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { WishlistService } from '../wishlist-service/wishlist-service.service';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.scss'
})
export class BookcardComponent {
  @Input() book: Book | undefined;

  constructor(private wishlistService: WishlistService) { }

  handleOnClick() {
    if (this.book !== undefined) {
      this.wishlistService.addToWishlist(this.book.title);
    }
  }
}
