import { Component, OnInit } from '@angular/core';
import houselist from '../../../assets/may-webshop-data.json';

interface Employees {
  id: string;
  name: string;
}

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss'],
})
export class ItemOverviewComponent implements OnInit {
  public houseList: Employees[] = houselist;

  ngOnInit(): void {
    this.houseList = houselist;
    console.log('houseList', this.houseList);
  }
}
