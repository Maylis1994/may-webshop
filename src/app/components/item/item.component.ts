import { Component, Input } from '@angular/core';
import { House } from '../item-overview/item-overview.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() houseItem: House;
}
