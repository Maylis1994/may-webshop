import { Component, Input } from '@angular/core';
import {
  House,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-sidepanel-item',
  templateUrl: './sidepanel-item.component.html',
  styleUrls: ['./sidepanel-item.component.scss'],
})
export class SidepanelItemComponent {
  @Input() item: House;
  public showBox = false;
  public quantity = 1;

  constructor(private wishlistService: WishlistService) {}

  public showPlusMinus() {
    this.showBox = !this.showBox;
  }

  public add() {
    this.quantity += 1;
  }

  public detract() {
    if (this.quantity < 2) {
      return;
    }
    this.quantity -= 1;
  }

  public updateQuantity() {
    this.showBox = !this.showBox;
    this.item.quantity = this.quantity;
    this.wishlistService.changeQuantity(this.item);
  }
}
