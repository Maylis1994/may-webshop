import { Component } from '@angular/core';
import { House } from 'src/app/services/wishlist.service';
import houselist from '../../../assets/house-data.json';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss'],
})
export class ItemOverviewComponent {
  public houseList: House[] = houselist;
}
