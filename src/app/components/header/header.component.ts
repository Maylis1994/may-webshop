import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showSidePanel = false;
  public listOfItems: any[];

  public showPanel() {
    this.showSidePanel = true;
  }
}
