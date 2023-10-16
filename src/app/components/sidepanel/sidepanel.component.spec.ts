import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';
import { SidepanelItemComponent } from './sidepanel-item/sidepanel-item.component';
import { SidepanelComponent } from './sidepanel.component';

describe('SidepanelComponent', () => {
  let component: SidepanelComponent;
  let fixture: ComponentFixture<SidepanelComponent>;
  let wishlistService: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidepanelComponent, SidepanelItemComponent],
      providers: [WishlistService],
    });

    fixture = TestBed.createComponent(SidepanelComponent);
    component = fixture.componentInstance;
    wishlistService = TestBed.inject(WishlistService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value of showPanel as false', () => {
    expect(component.showPanel).toBeFalse();
  });

  it('should emit showPanelChange on closePanel method', () => {
    const emitSpy = spyOn(component.showPanelChange, 'emit');
    component.showPanel = true;

    component.closePanel();

    expect(component.showPanel).toBeFalse();
    expect(emitSpy).toHaveBeenCalledWith(false);
  });
});
