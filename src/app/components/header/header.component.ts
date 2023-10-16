import { Component, OnInit } from '@angular/core';
import {
  ShoppingCart,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showSidePanel = false;
  public shoppingCart: ShoppingCart;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlistService.shoppingCart$.subscribe((shoppingCart) => {
      this.shoppingCart = shoppingCart;
    });
  }

  public showPanel() {
    this.showSidePanel = true;
  }
}
