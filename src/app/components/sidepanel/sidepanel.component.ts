import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  House,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss'],
})
export class SidepanelComponent implements OnInit {
  @Input() public showPanel: boolean = false;
  @Output() showPanelChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public wishlistItems: House[];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlistService.listOfItems$.subscribe((items) => {
      this.wishlistItems = items;
    });
  }

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
