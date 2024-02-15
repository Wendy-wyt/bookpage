import { Component } from '@angular/core';
import { WishlistService } from '../wishlist-service/wishlist-service.service';

@Component({
  selector: 'app-wishlistlist',
  templateUrl: './wishlistlist.component.html',
  styleUrl: './wishlistlist.component.scss'
})
export class WishlistlistComponent {
  showWishlist = false;
  wishlist: string[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    this.wishlistService.showWishlist$.subscribe(show => this.showWishlist = show);
    this.wishlistService.wishlist$.subscribe((wishlist) => {
      this.wishlist = [...wishlist];
    })
  }

  handleDelete(bookname: string) {
    this.wishlistService.deleteFromWishlist(bookname);
  }
}
