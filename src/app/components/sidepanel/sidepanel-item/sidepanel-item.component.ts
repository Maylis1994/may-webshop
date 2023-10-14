import { Component, Input } from '@angular/core';
import { House } from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-sidepanel-item',
  templateUrl: './sidepanel-item.component.html',
  styleUrls: ['./sidepanel-item.component.scss'],
})
export class SidepanelItemComponent {
  @Input() item: House;
}
