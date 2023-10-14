import { Component, OnInit } from '@angular/core';
import {
  House,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showSidePanel = false;
  public wishlistItems: House[];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlistService.listOfItems$.subscribe((items) => {
      this.wishlistItems = items;
    });
  }

  public showPanel() {
    this.showSidePanel = true;
  }
}
