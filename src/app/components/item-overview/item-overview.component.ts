import { Component } from '@angular/core';
import houselist from '../../../assets/house-data.json';

export interface House {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  amountOfBedrooms: number;
}

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss'],
})
export class ItemOverviewComponent {
  public houseList: House[] = houselist;
}
