import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ShoppingCartItem,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let wishlistService: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      providers: [WishlistService],
    });

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    wishlistService = TestBed.inject(WishlistService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default quantity of 1', () => {
    expect(component.quantity).toEqual(1);
  });

  it('should have isItemClicked set to false by default', () => {
    expect(component.isItemClicked).toBeFalse();
  });

  it('should call addToWishlist on addToList method', () => {
    const item: ShoppingCartItem = {
      id: '1',
      name: 'item1',
      image: '',
      price: 4000,
      quantity: 5,
    };
    const addToWishlistSpy = spyOn(wishlistService, 'addToWishlist');

    component.item = item;
    component.addToList();
    expect(addToWishlistSpy).toHaveBeenCalledWith(item);
  });
});
