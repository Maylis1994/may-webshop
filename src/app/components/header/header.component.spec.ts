import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let wishlistService: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, SidepanelComponent],
      providers: [WishlistService],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    wishlistService = TestBed.inject(WishlistService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize showSidePanel to false', () => {
    expect(component.showSidePanel).toBeFalse();
  });

  it('should set showSidePanel to true when showPanel is called', () => {
    component.showPanel();
    expect(component.showSidePanel).toBeTrue();
  });
});
