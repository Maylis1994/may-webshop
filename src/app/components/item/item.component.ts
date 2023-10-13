import { Component, Input } from '@angular/core';
import { House, WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() houseItem: House;

  constructor(private wishlistService: WishlistService) {}

  public addToList() {
    console.log('CLICKED');
    this.wishlistService.addToWishlist(this.houseItem);
  }
}
