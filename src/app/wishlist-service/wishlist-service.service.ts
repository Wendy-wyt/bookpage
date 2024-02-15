import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private showWishlist = new BehaviorSubject<boolean>(false);
  showWishlist$ = this.showWishlist.asObservable();

  private wishlist = new BehaviorSubject<string[]>([]);
  wishlist$ = this.wishlist.asObservable()

  constructor() { }

  toggleWishlist() {
    this.showWishlist.next(!this.showWishlist.value);
  }

  addToWishlist(bookname: string) {
    this.wishlist.next([...this.wishlist.value.filter(book => book !== bookname), bookname]);
  }

  deleteFromWishlist(bookname: string) {
    this.wishlist.next([...this.wishlist.value.filter(book => book !== bookname)])
  }
}
