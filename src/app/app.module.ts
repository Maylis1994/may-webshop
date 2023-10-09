import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemOverviewComponent } from './components/item-overview/item-overview.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ItemOverviewComponent, ItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
