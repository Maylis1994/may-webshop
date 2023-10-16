import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ShoppingCart,
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
  public shoppingCart: ShoppingCart;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlistService.shoppingCart$.subscribe((shoppingCart) => {
      this.shoppingCart = shoppingCart;
    });
  }

  public closePanel() {
    this.showPanel = false;
    this.showPanelChange.emit(this.showPanel);
  }
}
