import { Component } from '@angular/core';
import { ShoppingCartItem } from 'src/app/services/wishlistService/wishlist.service';
import itemList from '../../../assets/items-list-data.json';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss'],
})
export class ItemOverviewComponent {
  public itemList: ShoppingCartItem[] = itemList;
}
