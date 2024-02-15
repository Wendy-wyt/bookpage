import { Component } from '@angular/core';
import { WishlistService } from '../wishlist-service/wishlist-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  showWishlist = false;

  constructor(private wishlistService: WishlistService) { }

  handleOnClick() {
    this.wishlistService.toggleWishlist();
  }
}
