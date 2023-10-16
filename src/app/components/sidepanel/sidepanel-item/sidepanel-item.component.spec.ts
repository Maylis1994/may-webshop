import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ShoppingCartItem,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';
import { SidepanelItemComponent } from './sidepanel-item.component';

describe('SidepanelItemComponent', () => {
  let component: SidepanelItemComponent;
  let fixture: ComponentFixture<SidepanelItemComponent>;
  let wishlistService: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidepanelItemComponent],
      providers: [WishlistService],
    });

    fixture = TestBed.createComponent(SidepanelItemComponent);
    component = fixture.componentInstance;
    wishlistService = TestBed.inject(WishlistService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value of showBox as false', () => {
    expect(component.showBox).toBeFalse();
  });

  it('should have isPlusClicked and isMinusClicked set to false by default', () => {
    expect(component.isPlusClicked).toBeFalse();
    expect(component.isMinusClicked).toBeFalse();
  });

  it('should have isUpdateClicked set to false by default', () => {
    expect(component.isUpdateClicked).toBeFalse();
  });

  it('should toggle showBox on showPlusMinus method', () => {
    component.showPlusMinus();
    expect(component.showBox).toBeTrue();

    component.showPlusMinus();
    expect(component.showBox).toBeFalse();
  });

  it('should add to the item quantity on add method', () => {
    const item: ShoppingCartItem = {
      id: '1',
      name: 'item1',
      image: '',
      price: 4000,
      quantity: 2,
    };
    component.item = item;
    component.add();
    expect(item.quantity).toEqual(3);
  });

  it('should subtract from the item quantity on detract method', () => {
    const item: ShoppingCartItem = {
      id: '1',
      name: 'item1',
      image: '',
      price: 4000,
      quantity: 5,
    };
    component.item = item;
    component.detract();

    expect(item.quantity).toEqual(4);
  });

  it('should remove an item from the cart on removeFromCart method', () => {
    const item: ShoppingCartItem = {
      id: '1',
      name: 'item1',
      image: '',
      price: 4000,
      quantity: 5,
    };
    const removeFromWishlistSpy = spyOn(wishlistService, 'removeFromWishlist');

    component.removeFromCart(item);
    expect(removeFromWishlistSpy).toHaveBeenCalledWith(item);
  });

  it('should call changeQuantity on updateQuantity method', () => {
    const item: ShoppingCartItem = {
      id: '1',
      name: 'item1',
      image: '',
      price: 4000,
      quantity: 5,
    };
    const changeQuantitySpy = spyOn(wishlistService, 'changeQuantity');

    component.item = item;
    component.updateQuantity();
    expect(changeQuantitySpy).toHaveBeenCalledWith(item);
  });
});
