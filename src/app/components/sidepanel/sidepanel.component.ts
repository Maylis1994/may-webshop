import { Component, EventEmitter, Input, Output } from '@angular/core';
import { House, WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss'],
})
export class SidepanelComponent {
  @Input() public showPanel: boolean = false;
  @Output() showPanelChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private wishlistService: WishlistService) {}

  public removeFromCart(item: House) {
    this.wishlistService.removeFromWishlist(item);
  }

  public changeQuantity(item: House, quantity: string) {
    const quantityNumber = parseInt(quantity);
    this.wishlistService.changeQuantity(item, quantityNumber);
  }

  public closePanel() {
    this.showPanel = false;
    this.showPanelChange.emit(this.showPanel);
  }
}
