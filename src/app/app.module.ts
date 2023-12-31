import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemOverviewComponent } from './components/item-overview/item-overview.component';
import { ItemComponent } from './components/item-overview/item/item.component';
import { SidepanelItemComponent } from './components/sidepanel/sidepanel-item/sidepanel-item.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemOverviewComponent,
    ItemComponent,
    SidepanelComponent,
    SidepanelItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
