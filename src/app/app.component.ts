import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'may-webshop';

  public listOfItems: any;

  ngOnInit() {
    console.log('outcome', JSON.stringify(localStorage));
    this.listOfItems = JSON.stringify(localStorage);
  }
}
