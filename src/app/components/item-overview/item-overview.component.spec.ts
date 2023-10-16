import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemOverviewComponent } from './item-overview.component';
import { ItemComponent } from './item/item.component';

describe('ItemOverviewComponent', () => {
  let component: ItemOverviewComponent;
  let fixture: ComponentFixture<ItemOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemOverviewComponent, ItemComponent],
    });
    fixture = TestBed.createComponent(ItemOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
